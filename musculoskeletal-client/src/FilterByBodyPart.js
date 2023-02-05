import React from "react";

function FilterByBodyPart({handleBodyPart}) {
    return (
        <div className="filter">
            <label>Search by Body Part: </label>
            <select onChange={handleBodyPart}>
                <option value="All">All</option>
                <option value="Shoulder">Shoulder</option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Arms">Arms</option>
                <option value="Abdominals">Abdominals</option>
                <option value="Glutes">Glutes</option>
                <option value="Quadriceps">Quadriceps</option>
                <option value="Hamstrings">Hamstrings</option>
                <option value="Calves">Calves</option>
                <option value="Miscellaneous">Miscellaneous</option>
            </select>
        </div>
    )    
}

export default FilterByBodyPart;