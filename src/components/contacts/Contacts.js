import React, { useContext } from 'react';
import Contact from './Contact';
import { Context } from '../../context';

function Contacts() {
  const value = useContext(Context);
  const { contacts } = value;

  return (
    <React.Fragment>
      <h4 className="display-4 mb-2">
        <span className="text-danger">Contact</span> List
      </h4>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </React.Fragment>
  );
}

export default Contacts;
