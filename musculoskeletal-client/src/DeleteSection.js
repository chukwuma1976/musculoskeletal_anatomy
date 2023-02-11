import React, {useState} from 'react'

function DeleteSection({parameter, onDeleteSection, sections}) {
    const [id, setId] = useState("")

    function handleChange (event) {
        setId(event.target.value)   
    }

    function handleDelete(event) {
        event.preventDefault()
        fetch(`http://localhost:9292/${parameter}/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(()=>onDeleteSection(id))    
    }
    return (
        <div>
            <form onSubmit={handleDelete}>
                <label>
                    Select if you want to delete a {parameter==="bodyparts" ? "body part" : "region"}.
                </label>
                <br/>
                <select onChange={handleChange}>
                    <option>Select an item</option>
                    {sections.map(section => 
                        <option type="text" key={section.id} value={section.id} >{section.name}</option>)}                   
                </select>               
                <button type="submit">Delete</button>
            </form>
        </div>
      )
}

export default DeleteSection