import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name);
  };
  const filteredContacts = getFilteredContacts();

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
}
