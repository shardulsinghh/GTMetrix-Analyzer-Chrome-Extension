import {API_USER, API_KEY} from "../constants/Types/api_const";
import axios from 'axios';


export const update = ( element, formdata, formName )=>{
    const newFormData = {
        ...formdata
    };
    const newElement = {
        ...newFormData[element.id]
    };

    newElement.value = element.event.target.value;

    newFormData[element.id] = newElement;

    return newFormData
};

export const isFormValid = (formData, formName) => {
    let formIsValid = true;
    for(let key in formData){
        formIsValid = formData[key].valid && formIsValid;
    }
    return formIsValid;

};

export const runTest = (formData) => {
    axios({
        method: 'post',
        url: 'https://gtmetrix.com/api/0.1/test',
        data:{
            url: "sfreelancer"
        },
        auth: {
            username: API_USER,
            password: API_KEY
        }

    }).then((response) => {
        console.log(response);
    });
   
}