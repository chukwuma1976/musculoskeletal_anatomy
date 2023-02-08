import React from "react";

function FindByName({setName, structure}){
    let entry

    function handleChange(event){
        setName(event.target.value)
    }

    return (
        <div className="filter">
            <label>Find {structure} by name: </label>
            <input type="text" value={entry} onChange={handleChange}></input>
        </div>
    )
}

export default FindByName;