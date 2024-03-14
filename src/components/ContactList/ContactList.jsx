import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
