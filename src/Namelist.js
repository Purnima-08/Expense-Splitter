import React from 'react';

function NameList({ names }) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;