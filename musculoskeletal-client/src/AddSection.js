import React, {useState} from 'react'

function AddSection({parameter, handleArray}) {

    const [entry, setEntry] = useState({name: ""})
    function handleChange(event) {
        setEntry({...entry, name: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(entry)
        fetch(`http://localhost:9292/${parameter}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(entry)
        })
        .then(res => res.json())
        .then(data => handleArray(data))
    }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Enter Text </label>
            <input type="text" value={entry.name} onChange={handleChange} />
            <button type="submit">Submit</button>
            <br/>
        </form>
    </div>
  )
}

export default AddSection