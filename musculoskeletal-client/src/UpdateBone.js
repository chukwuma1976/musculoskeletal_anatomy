import React from 'react';
import { useState } from 'react';   
// import { useNavigate } from 'react-router-dom';

function UpdateBone({bone, showPopUp, closePopUp, onUpdate}){
    const [newBone, setNewBone] = useState({description: bone.description})

    const {description} = newBone

    // const navigate = useNavigate()

    function handleChange(event){
        setNewBone(newBone=>({...newBone, [event.target.name]:event.target.value}))
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch(`http://localhost:9292/bones/${bone.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newBone)
            })
            .then(res=>res.json())
            .then(bone=>onUpdate(bone))
        closePopUp()
    }

    if (!showPopUp) {return null}
    return (
        <div className='PopUp'>
            <button onClick={closePopUp}>close</button>
            <h4>Update {bone.name} by entering the information below</h4>
            <form onSubmit={handleSubmit}>
                <label>Description </label>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="description" 
                    value={description}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateBone;