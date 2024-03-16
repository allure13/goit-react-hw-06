import './App.css';
import ContactList from './ContactList/ContactList';
import initialContacts from '../contactlist.json';
import SearchBar from './SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      return JSON.parse(savedContacts);
    } else {
      return initialContacts;
    }
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addContact = newContact => {
    const isDuplicateNumber = contacts.some(
      contact => contact.number === newContact.number
    );
    if (isDuplicateNumber) {
      alert('This phone number already exists!');
    } else {
      setContacts(prevContacts => {
        return [...prevContacts, newContact];
      });
    }
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBar searchTerm={searchTerm} onChange={handleChange} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
