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
    <div className="card mb-3">
      <div className="card-header">Edit Contact</div>
      <div className="card-body">
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
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}

export default EditContact;
