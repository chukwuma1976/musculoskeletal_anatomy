import React from "react";

function FindByName({setName, handleSubmit, structure}){
    let entry

    function handleChange(event){
        setName(event.target.value)
    }

    return (
        <div className="filter">
            <form onSubmit={handleSubmit}>
                <label>Find {structure} by name: </label>
                <input type="text" value={entry} onChange={handleChange}></input>
                <button type="submit">🔎</button>
            </form>
        </div>
    )
}

export default FindByName;