import React, {useState} from 'react'
import PopUp from './PopUp'

function AddSection({parameter, handleArray}) {
    const [errors, setErrors] = useState(null)
    const [entry, setEntry] = useState({name: ""})
    const [showPopUp, setShowPopUp] = useState(false)
    
    function handleChange(event) {
        setEntry({...entry, name: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        fetch(`/${parameter}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(entry)
        })
        .then(res => {
            if (res.ok){
                res.json().then(data => handleArray(data))
                setShowPopUp(true)
            } else {
                res.json().then(errors => setErrors(errors.errors))
            }
        })
        
        
    }
  
  return (
    <div>
        {errors ? errors.map(error => <p>{error}</p>) : null}
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