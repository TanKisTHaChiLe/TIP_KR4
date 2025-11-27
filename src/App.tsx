import { useState } from "react";
import animalsData from "./data.json";
import { Card } from "./card";
import "./App.css";

function App() {
  const [filteredAnimals, setFilteredAnimals] = useState(animalsData.animals);

  const filterAnimals = () => {
    setFilteredAnimals(
      animalsData.animals.filter((item) => item.category === "mammal")
    );
  };

  const filterBird = () => {
    setFilteredAnimals(
      animalsData.animals.filter((item) => item.category === "bird")
    );
  };

  const showAll = () => {
    setFilteredAnimals(animalsData.animals);
  };
  return (
    <>
      <div className="button-container">
        <button onClick={filterAnimals}>Показать млекопитающих</button>
        <button onClick={filterBird}>Показать птиц</button>
        <button onClick={showAll}>Показать всех</button>
      </div>
      <div className="card-container">
        {filteredAnimals.map((item) => {
          return (
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
