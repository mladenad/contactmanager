import React, { useContext } from 'react';
import Contact from './Contact';
import { Context } from '../../context';

function Contacts() {
  const value = useContext(Context);
  const { contacts } = value;

  return (
    <React.Fragment>
      <h4 className="display-4 mb-2" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: '#1e3a8a',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        <i className="fas fa-users" style={{ color: '#3b82f6' }}></i>
        Contact Directory
      </h4>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </React.Fragment>
  );
}

export default Contacts;
