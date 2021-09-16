import React from 'react'
import ContactCard from './ContactCard';
import './App.css';

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <div>
                
                <div className="contactListStyle">
                    <ContactCard contact = {contact} clickHandler={deleteContactHandler} key={contact.id}/>
                </div>
            </div>
        );
    })

    

    return (
        <div>
            {renderContactList}
        </div>
    )
}

export default ContactList
