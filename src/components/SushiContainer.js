// Importing React and useState hook
import React, { useState } from 'react';
import MoreButton from './MoreButton'; // Importing the MoreButton component
import Sushi from './Sushi'; // Importing the Sushi component

// SushiContainer component that handles the display of Sushi items
function SushiContainer({ sushis, eatSushi }) {
  // State to track the index of the currently displayed sushi
  const [displayIndex, setDisplayIndex] = useState(0);

  // Selecting a subset of sushis to display, starting from displayIndex
  // Only 4 sushis are displayed at a time
  const displayedSushis = sushis.slice(displayIndex, displayIndex + 4);

  // Function to load more sushi items by updating the displayIndex
  const moreSushi = () => {
    setDisplayIndex((prevIndex) => (prevIndex + 4) % sushis.length);
  };

  // Render the Sushi components and the MoreButton
  // Each Sushi component is passed individual sushi data and the eatSushi function
  return (
    <div className="belt">
      {displayedSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} />)}
      <MoreButton onClick={moreSushi} />
    </div>
  );
}

// Exporting SushiContainer for use in other components
export default SushiContainer;
