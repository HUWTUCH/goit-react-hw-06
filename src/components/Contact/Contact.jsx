import css from './Contact.module.css'
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contactsSlice.js";
const Contact = ({ contact }) => {
    const { name, number } = contact;
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    }
    return (
        <li className={css.items}>
            <div>
                <p>Name: {name}</p>
                <p>Number: {number}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default Contact;