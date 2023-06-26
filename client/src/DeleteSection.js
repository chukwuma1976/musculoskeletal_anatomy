import React, {useState} from 'react'
import PopUp from './PopUp'

function DeleteSection({parameter, updateSection, sections}) {
    const [id, setId] = useState("")
    const [showPopUp, setShowPopUp] = useState(false)

    function handleChange (event) {
        setId(event.target.value)   
    }

    function handleDelete(event) {
        event.preventDefault()
        fetch(`/${parameter}/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(()=>onDeleteSection(id))    
    }
    function onDeleteSection() {
        fetch(`http://localhost:9292/${parameter}`)
        .then(res => res.json())
        .then(data => updateSection(data))
        setShowPopUp(true)
    }

    return (
        <div>
            <form onSubmit={handleDelete}>
                <select onChange={handleChange}>
                    <option>Select a {parameter==="bodyparts" ? "body part" : "region"} to remove</option>
                    {sections.map(section => 
                        <option type="text" key={section.id} value={section.id} >{section.name}</option>)}                   
                </select>               
                <button type="submit">Delete</button>
            </form>
            <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
                    <p>DELETED</p>
            </PopUp> 
        </div>
      )
}

export default DeleteSection