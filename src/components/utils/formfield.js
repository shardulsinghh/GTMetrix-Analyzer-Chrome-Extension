import React from "react";

const FormField = ({formdata, change, id})=>{

    const renderTemplate = () => {
        let form_template = null;
        switch(formdata.element){
            case('input'):
                form_template = (
                    <div className="formBlock">
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event) => change({event, id})}
                        />
                    </div>
                );
                break;
            default:
                form_template= null;
        }
        return form_template;
    }
    return(
        <div>
            {renderTemplate()}
        </div>
    );
}

export default FormField;