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
    <div className="card card-body mb-3">
      <h4>
        {name}{' '}
        <i
          className="fas fa-sort-down"
          style={{ cursor: 'pointer' }}
          onClick={() => setShowContactInfo(!showContactInfo)}
        />
        <i
          className="fas fa-times"
          style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          onClick={() => onDeleteClick(id, dispatch)}
        />
        <Link to={`contact/edit/${id}`}>
          <i
            className="fas fa-pencil-alt"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: 'black',
              marginRight: '1rem'
            }}
          />
        </Link>
      </h4>
      {showContactInfo ? (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
