import React, {useState} from 'react'
import PopUp from './PopUp'

function AddSection({parameter, handleArray}) {

    const [entry, setEntry] = useState({name: ""})
    const [showPopUp, setShowPopUp] = useState(false)
    
    function handleChange(event) {
        setEntry({...entry, name: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`http://localhost:9292/${parameter}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(entry)
        })
        .then(res => res.json())
        .then(data => handleArray(data))
        setShowPopUp(true)
    }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter Text </label>
            <input type="text" value={entry.name} onChange={handleChange} />
            <button type="submit">Submit</button>
            <br/>
        </form>
        <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
                    <p>You have just added {entry.name}.</p>
        </PopUp> 
    </div>
  )
}

export default AddSection