import React from "react";

function FilterByBodyPart({bodyParts, handleBodyPart}) {
    const bodyPartsDropDownItems = bodyParts.map(bodyPart => 
        <option key={bodyPart.name} value={bodyPart.id} >{bodyPart.name}</option>)

    return (
        <div className="filter">
            <label>Search by Body Part: </label>
            <select onChange={handleBodyPart} placeholder="All">
                <option value="All">All</option>
                {bodyPartsDropDownItems}
            </select>
        </div>
    )    
}

export default FilterByBodyPart;