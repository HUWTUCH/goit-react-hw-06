import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const searchTerm = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDeleteContact = (contactId) => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ul className={css}>
            {filteredContacts.map(contact => (
                <Contact
                    key={contact.id}
                    contact={contact}
                    onDelete={() => handleDeleteContact(contact.id)}
                />
            ))}
        </ul>
    );
};

export default ContactList;
