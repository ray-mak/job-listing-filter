import React from "react";
import Card from "./Card";
import Data from "./data.json";

function App() {
  const cardData = Data.map(info => {
    return <Card 
            key={info.id}
            info={info}
          />
  })

  return (
    <div className="main--container">
      <header>
      </header>
      <main>
        <div className="filter--bar">
          <div className="filter--tablet">
            <div className="tag">Frontend</div>
            <button className="remove-btn" type="button" aria-label="remove"></button>
          </div>
          <div className="filter--tablet">
            <div className="tag">CSS</div>
            <button className="remove-btn" type="button" aria-label="remove"></button>
          </div>
          <button className="clear-btn" type="button">Clear</button>
        </div>
        <div className="card--container">
          {cardData}  
        </div>
      </main>
    </div>
  )

}

export default App
