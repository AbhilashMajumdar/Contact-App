import React, { useState, useEffect} from 'react';
import Header from './Header';
import { uuid } from 'uuidv4';
import AddContact from './AddContact';
import ContactList from './ContactList';
import './App.css';

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  // Using Hooks in react 
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    // adding contact into setContacts 
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }

  // useEffect() React hook for parmanent storing data after refresh page

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts]);

  // removing contact 
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  return (
    <div className="conatiner text-center">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Header/>
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-md-6">
          <AddContact addContactHandler = {addContactHandler} />
        </div>
      </div>

      <div className="row justify-content-center my-3">
        <div className="col-md-6">
          <div className="ContactBar pt-2 pb-2">
            <h3>Contact List</h3>
          </div>
          <ContactList contacts = { contacts } getContactId={removeContactHandler}/>
        </div>
      </div>
      
    </div>
  )
}

export default App;

