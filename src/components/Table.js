// Importing React
import React from 'react';

// Table component to display the plates and budget
function Table({ plates, budget }) {
  // Mapping through the plates array to create an array of divs representing empty plates
  // Each plate has a unique key based on its index
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  // Render the budget and the stacked plates
  return (
    <>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {emptyPlates}
        </div>
      </div>
    </>
  );
}

// Exporting Table for use in other components
export default Table;
