import React, { useState, useEffect } from 'react';

function Test() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        // Assuming the API returns 'body', if not, this might need adjustment
        // For 'todos', it's usually 'title' and 'completed'
        // For 'posts', it's 'title' and 'body'
        // The original class component used data.body, so we'll stick to that.
        // If 'body' is undefined, it will just render as empty or cause a warning if not handled.
        setBody(data.body);
      })
      .catch(error => console.error("Error fetching test data:", error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Test;
