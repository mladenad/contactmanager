import React, { useState, useContext } from 'react';
import { Context } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddContact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

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

    const newContact = {
      name,
      email,
      phone
      // No need for id, jsonplaceholder will create it
    };

    try {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        newContact
      );
      dispatch({ type: 'ADD_CONTACT', payload: res.data });
    } catch (error) {
      // Handle error appropriately in a real app
      console.error("Error adding contact:", error);
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
      <div className="card-header">Add Contact</div>
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
            value="Add Contact"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
}

export default AddContact;
