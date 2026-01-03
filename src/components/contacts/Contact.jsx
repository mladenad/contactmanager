import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Context } from '../../context';
import axios from 'axios';

function Contact(props) {
  const { contact } = props;
  const { id, name, email, phone } = contact;

  const [showContactInfo, setShowContactInfo] = useState(false);
  const { dispatch } = useContext(Context);

  const onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      // In a real app, you might want to handle this error more gracefully
      // For now, we'll still dispatch to remove it from the UI
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  return (
    <div className="card card-body mb-3 contact-card" style={{
      borderLeft: '4px solid #1e3a8a',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{
          margin: 0,
          color: '#1e293b',
          fontWeight: '600',
          fontSize: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <i className="fas fa-user-circle" style={{ color: '#3b82f6', fontSize: '1.5rem' }}></i>
          {name}
          <i
            className="fas fa-chevron-down"
            style={{
              cursor: 'pointer',
              color: '#64748b',
              fontSize: '0.875rem',
              marginLeft: '0.5rem',
              transition: 'all 0.2s ease',
              transform: showContactInfo ? 'rotate(180deg)' : 'rotate(0deg)'
            }}
            onClick={() => setShowContactInfo(!showContactInfo)}
          />
        </h4>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Link to={`contact/edit/${id}`} style={{ textDecoration: 'none' }}>
            <i
              className="fas fa-edit"
              style={{
                cursor: 'pointer',
                color: '#1e3a8a',
                fontSize: '1.125rem',
                padding: '0.5rem',
                borderRadius: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f1f5f9';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              title="Edit Contact"
            />
          </Link>
          <i
            className="fas fa-trash-alt"
            style={{
              cursor: 'pointer',
              color: '#ef4444',
              fontSize: '1.125rem',
              padding: '0.5rem',
              borderRadius: '6px',
              transition: 'all 0.2s ease'
            }}
            onClick={() => onDeleteClick(id, dispatch)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fef2f2';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            title="Delete Contact"
          />
        </div>
      </div>
      {showContactInfo ? (
        <ul className="list-group" style={{ marginTop: '1rem' }}>
          <li className="list-group-item" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            marginBottom: '0.5rem'
          }}>
            <i className="fas fa-envelope" style={{ color: '#3b82f6', width: '1.25rem' }}></i>
            <strong style={{ color: '#64748b', minWidth: '60px' }}>Email:</strong>
            <span style={{ color: '#1e293b' }}>{email}</span>
          </li>
          <li className="list-group-item" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px'
          }}>
            <i className="fas fa-phone" style={{ color: '#3b82f6', width: '1.25rem' }}></i>
            <strong style={{ color: '#64748b', minWidth: '60px' }}>Phone:</strong>
            <span style={{ color: '#1e293b' }}>{phone}</span>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
