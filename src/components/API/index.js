import React, { Component } from 'react';
import FormField from '../utils/formfield';
import {update, isFormValid, runTest } from "../utils/formActions";

class API extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata:{
            url:{
                element:'input',
                value: '',
                config: {
                    name: 'url_input',
                    type: 'url',
                    placeholder: 'Enter a URL'
                }
            }
        }
    }

    updateForm = (element) => {
        const newFormData = update(element, this.state.formdata, 'login');
        this.setState({
            formError: false,
            formdata: newFormData
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        const results = runTest(this.state.formdata);
        console.log(this.state.formdata);
    }

    render() {
        return (
            <div>
                <form>
                    <FormField
                        id={"url"}
                        formdata={this.state.formdata.url}
                        change={(element) => {this.updateForm(element)}}
                    />
                    <button onClick={(event => this.submitForm(event))}>
                          Run Test
                    </button>
                </form>
            </div>
        );
    }
}

export default API;