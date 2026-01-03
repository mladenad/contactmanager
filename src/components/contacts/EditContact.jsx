import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditContact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const contact = res.data;
        setName(contact.name);
        setEmail(contact.email);
        setPhone(contact.phone);
      } catch (error) {
        console.error("Error fetching contact:", error);
        // Optionally navigate to not found or show error
      }
    };

    fetchContact();
  }, [id]); // Rerun effect if id changes

  const onChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (name === '') {
      setErrors({ name: 'Name is required' });
      return;
    }
    if (email === '') {
      setErrors({ email: 'Email is required' });
      return;
    }
    if (phone === '') {
      setErrors({ phone: 'Phone is required' });
      return;
    }

    const updContact = {
      name,
      email,
      phone
    };

    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updContact
      );
      dispatch({ type: 'UPDATE_CONTACT', payload: res.data });
    } catch (error) {
      console.error("Error updating contact:", error);
      // Optionally, you could dispatch an error action or set an error state
    }

    setName('');
    setEmail('');
    setPhone('');
    setErrors({});

    navigate('/');
  };

  return (
    <div className="card mb-3" style={{
      maxWidth: '800px',
      margin: '0 auto',
      borderRadius: '12px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }}>
      <div className="card-header" style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%)',
        color: 'white',
        padding: '1.5rem',
        fontSize: '1.5rem',
        fontWeight: '700',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <i className="fas fa-user-edit" style={{ color: '#3b82f6' }}></i>
        Edit Contact
      </div>
      <div className="card-body" style={{ padding: '2rem' }}>
        <form onSubmit={onSubmit}>
          <TextInputGroup
            label="Name"
            name="name"
            placeholder="Enter Name..."
            value={name}
            onChange={onChange}
            error={errors.name}
          />
          <TextInputGroup
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Email..."
            value={email}
            onChange={onChange}
            error={errors.email}
          />
          <TextInputGroup
            label="Phone"
            name="phone"
            placeholder="Enter Phone..."
            value={phone}
            onChange={onChange}
            error={errors.phone}
          />
          <input
            type="submit"
            value="Update Contact"
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.875rem',
              fontSize: '1rem',
              fontWeight: '600',
              background: '#1e3a8a',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginTop: '1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1e293b';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1e3a8a';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default EditContact;
