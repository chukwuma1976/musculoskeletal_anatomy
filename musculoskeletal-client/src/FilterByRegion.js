import React from "react";

function FilterByRegion({regions, handleRegion}) {
    const regionsDropDownItems = regions.map(region => 
        <option key={region.name} value={region.id} >{region.name}</option>)

    return (
        <div className="filter">
            <label>Search by Region: </label>
            <select onChange={handleRegion}>
                <option value="All">All</option>
                {regionsDropDownItems}
            </select>
        </div>
    )    
}

export default FilterByRegion;