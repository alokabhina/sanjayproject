import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Menu from '../../Components/Menu/Menu';
import Food from '../../Components/FoodDisplay/Food';

const Home = () => {
  const [category, setCategory] = useState("All");

  // Conditional rendering to handle potential empty or invalid category
  const renderFoodContent = category === "" || category === "All" ? 
    <Food category="All" /> : <Food category={category} />;

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      {renderFoodContent}
    </div>
  );
};

export default Home;
