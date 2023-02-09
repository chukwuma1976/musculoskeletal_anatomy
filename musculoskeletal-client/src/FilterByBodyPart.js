import React from "react";

function FilterByBodyPart({bodyParts, handleBodyPart}) {
    const bodyPartsDropDownItems = bodyParts.map(bodyPart => 
        <option key={bodyPart.name} value={bodyPart.name} >{bodyPart.name}</option>)

    return (
        <div className="filter">
            <label>Search by Body Part: </label>
            <select onChange={handleBodyPart}>
                <option value="All">All</option>
                {bodyPartsDropDownItems}
            </select>
        </div>
    )    
}

export default FilterByBodyPart;