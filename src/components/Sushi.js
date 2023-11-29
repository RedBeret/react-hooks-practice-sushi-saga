// Import React
import React from 'react';

// Sushi component - displays individual sushi details and allows interaction
function Sushi({ sushi, eatSushi }) {
  // Destructuring to extract properties from the sushi object
  const { name, img_url, price, eaten, id } = sushi;

  // Function to handle click on a sushi
  // It checks if the sushi hasn't been eaten before calling eatSushi
  const handleClick = () => {
    if (!eaten) {
      eatSushi(id, price);
    }
  };

  // Render the sushi item with an image, name, and price
  // Only displays the image if the sushi has not been eaten
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

// Exporting Sushi for use in other components
export default Sushi;
