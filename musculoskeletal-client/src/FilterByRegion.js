import React from "react";

function FilterByRegion({handleRegion}) {
    return (
        <div className="filter">
            <label>Search by Region: </label>
            <select onChange={handleRegion}>
                <option value="All">All</option>
                <option value="Skull">Skull</option>
                <option value="Spine">Spine</option>
                <option value="Thorax">Thorax</option>
                <option value="Pelvis">Pelvis</option>
                <option value="Upper Extremity">Upper Extremity</option>
                <option value="Lower Extremity">Lower Extremity</option>
            </select>
        </div>
    )    
}

export default FilterByRegion;