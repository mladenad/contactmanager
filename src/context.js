import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return {
        ...state,
        contacts: action.payload
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? action.payload // Corrected update logic
            : contact
        )
      };
    default:
      return state;
  }
};

const initialState = {
  contacts: []
  // dispatch is automatically provided by useReducer
};

export function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({ type: 'SET_CONTACTS', payload: res.data });
      } catch (error) {
        console.error("Error fetching contacts:", error);
        // Optionally dispatch an error action or set an error state
      }
    };

    fetchContacts();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <Context.Provider value={{ contacts: state.contacts, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context };
export const Consumer = Context.Consumer;
