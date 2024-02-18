import React from 'react';

function MyComponent() {
  return (
    <div>
      {/* <h1>My React App</h1> */}
      <iframe
        style={{
          background: '#FFFFFF',
          border: 'none',
          borderRadius: '2px',
          boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
        }}
        width="640"
        height="480"
        src="https://charts.mongodb.com/charts-project-0-pevxc/embed/charts?id=65d19453-abaa-423e-8942-c6ee8818233d&maxDataAge=3600&theme=light&autoRefresh=true"
      ></iframe>
    </div>
  );
}

export default MyComponent;
