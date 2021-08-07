import { useState } from 'react';

const useForm = (props, validate) => {
    const [values, setValues] = useState({
        idea: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values, 
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.formHandler(values);
        setValues({idea: "", email: ""});


        setErrors(validate(values));
    };


    return {handleChange, values, handleSubmit, errors};
};

export default useForm;