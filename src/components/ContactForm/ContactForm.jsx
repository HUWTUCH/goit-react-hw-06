import {ErrorMessage, Field, Form, Formik} from "formik";
import css from './ContactForm.module.css';
import { useId } from "react";
import { nanoid } from "nanoid/non-secure";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {addContact} from "../../redux/contactsSlice.js";


const ContactForm = () => {
    const nameInput = useId();
    const numberInput = useId();
    const dispatch = useDispatch()
    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(3, 'Too Short').max(50, "Too Long").required("Required"),
        telephoneNumber: Yup.string().min(3, 'Too Short').max(50, "Too Long").required("Required"),
    });

    const handleSubmitForm = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.username,
            number: values.telephoneNumber
        };
        dispatch(addContact(newContact));
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={{
                username: "",
                telephoneNumber: ""
            }}
            onSubmit={handleSubmitForm}
            validationSchema={FeedbackSchema}
        >
            <Form className={css.form}>
                <div className={css.input}>
                    <label htmlFor={nameInput}>Name</label>
                    <Field
                        type="text"
                        name="username"
                        id={nameInput}
                        className={css.inputText}
                    />
                    <ErrorMessage name="username" as='span' />
                </div>
                <div className={css.input}>
                    <label>Number</label>
                    <Field
                        type="text"
                        name="telephoneNumber"
                        id={numberInput}
                        className={css.inputText}
                    />
                    <ErrorMessage name="telephoneNumber" as='span' />
                </div>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;