import React from 'react';

function Note({ id, title, content, onDelete }) {

  function handleChange() {
    onDelete(id);
  }
  return (
    <div className='note'>
      <span style={{ marginLeft: '100px' }}></span>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleChange}>DELETE</button>
    </div>
  )
}

export default Note