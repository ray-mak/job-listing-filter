import React from "react";
import FilterTablet from "./FilterTablet";
 
export default function FilterBar(props) {
    const filterTabs = props.filters.map(item => {
        return <FilterTablet key={item} tag={item} handleClick={props.handleClick}/>
    })
    return (
        <div className="filter--bar">
            <div className="tab--container">
                {filterTabs}
            </div>
            <button className="clear-btn" type="button" onClick={props.clearFilters}>Clear</button>
        </div>
    )
}