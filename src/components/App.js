// Importing necessary React hooks and components
import React, { useState, useEffect } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

// API endpoint for fetching sushi data
const API = "http://localhost:3001/sushis";

function App() {
  // State for storing sushi data and budget
  const [sushis, setSushis] = useState([]);
  const [budget, setBudget] = useState(100);

  // useEffect to fetch sushi data from the API on component mount
  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushis => setSushis(sushis));
  }, []);

  // Function to handle eating a sushi which updates the sushi data and budget
  const eatSushi = (id, price) => {
    if (budget >= price) {
      setSushis(sushis.map(sushi => {
        if (sushi.id === id) {
          return { ...sushi, eaten: true };
        }
        return sushi;
      }));
      setBudget(budget - price);
    }
  };

  // Rendering the SushiContainer and Table components
  return (
    <div className="app">
      {/* Pass sushis data and eatSushi function to SushiContainer */}
      <SushiContainer sushis={sushis} eatSushi={eatSushi} />
      {/* Pass filtered plates and budget to Table */}
      <Table plates={sushis.filter(sushi => sushi.eaten)} budget={budget} />
    </div>
  );
}

export default App;
