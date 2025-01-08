import React, {useCallback, useState} from 'react';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import * as Yup from "yup";
import {useForm} from "react-hook-form";

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.REACT_APP_PUBLIC_MAILGUN_API_KEY});
const mgDomain = process.env.REACT_APP_PUBLIC_MAILGUN_DOMAIN;
const useYupValidationResolver = (validationSchema) =>
    useCallback(
        async (data) => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false,
                })
                return {
                    values,
                    errors: {},
                }
            } catch (errors) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors, currentError) => ({
                            ...allErrors,
                            [currentError.path]: {
                                type: currentError.type ?? "validation",
                                message: currentError.message,
                            },
                        }),
                        {}
                    ),
                }
            }
        },
        [validationSchema]
    );

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is Required*'),
    email: Yup.string().email('Invalid email').required('Email is Required*'),
    message: Yup.string().required('A Message is Required*'),
});


const Contact  = () => {
    const resolver = useYupValidationResolver(validationSchema);
    const { handleSubmit, register } = useForm({ resolver });
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (values) => {
        console.log(mgDomain);
        const currentDate = new Date();
        client.messages.create(mgDomain, {
            from: `"Contact Form Submission" <mailgun@${mgDomain}>`,
            to: ["ebeljezy@gmail.com"],
            subject: "Contact Form Submission " + currentDate,
            text: `New Form Submission: \n
                                    Name: ${values.name}\n
                                    Email: ${values.email}\n
                                    Message: ${values.message}`,
        }).then(r =>  {
            console.log(r)
            setSubmitted(true);
        }) // logs response data
            .catch(err => console.log(err)); //logs any error
    };

    return (
        <div className="page">
            <div className="form-wrapper" style={{gridTemplateColumns: "repeat(1, 1fr)"}}>
                <form onSubmitCapture={handleSubmit(onSubmit)}>
                    <div className="page-section-header contact-header">
                        Get In Touch
                    </div>
                    <div className="page-body">
                        Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.
                    </div>
                    <div style={{marginTop: "1rem"}}>
                        <label>Name
                            <input className="form-field" name="name" type="text" autoComplete="on" {...register("name")}/>
                        </label>
                        <label>Email
                            <input className="form-field" name="email" type="email" autoComplete="on" {...register("email")}/>
                        </label>
                        <label>Message
                            <textarea className="form-field" name="message" rows={4} {...register("message")}></textarea>
                        </label>
                    </div>
                    <div style={{marginLeft: "auto"}}>
                        <button type="submit" className="responsive-button"
                                style={{fontSize: 16, margin: 8}}>
                            Submit
                        </button>
                    </div>
                    <div hidden={!submitted}>
                        <p className="alert-success">Successfully Submitted! I&apos;ll get back to you as soon as I can. Cheers!</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;