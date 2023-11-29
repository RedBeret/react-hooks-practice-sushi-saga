// Importing React
import React from 'react';

// Functional component MoreButton that takes a prop 'onClick'
function MoreButton({ onClick }) {
  // Render a button that, when clicked, triggers the passed onClick function
  return <button onClick={onClick}>More sushi!</button>;
}

// Exporting MoreButton for use in other components
export default MoreButton;
