import React from "react";
import Card from "./Card";
import Data from "./data.json";
import FilterBar from "./FilterBar"

function App() {
  const [filters, setFilters] = React.useState([]);
  
  const filteredObjects = Data.filter(obj => {
    return filters.every(filter => {
      return (
        obj.role === filter ||
        obj.level === filter ||
        obj.languages.includes(filter) ||
        obj.tools.includes(filter)
      )
    })
  })

  const cardData = filteredObjects.map(info => {
    return <Card 
            key={info.id}
            info={info}
            handleClick={addFilter}
          />
  })

  console.log(filteredObjects)

  function addFilter(event) {
    setFilters(prevFilters => {
      const filterItem = event.target.innerText;
      if (filters.includes(filterItem)) {
        return prevFilters
      } else {
        return (
          [...prevFilters, filterItem]
        )
      }
    })
  }

  function removeFilter(event) {
    setFilters(prevFilters => {
      const filterItem = event.target.value;
      return prevFilters.filter(function(item) {
        return item !== filterItem
      })
    })
  }

  function clearFilters() {
    setFilters(prevFilters => [])
  }
  
  return (
    <div className="main--container">
      <header>
      </header>
      <main>
        {filters.length > 0 && <FilterBar filters={filters} handleClick={removeFilter} clearFilters={clearFilters}/>}
        <div className="card--container">
          {cardData}  
        </div>
      </main>
    </div>
  )

}

export default App
