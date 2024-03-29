import React from 'react';
import { useState } from 'react';   

function UpdateBone({bone, showPopUp, closePopUp, onUpdate}){
    const [newBone, setNewBone] = useState({name: bone.name, description: bone.description, url: bone.url})

    const {name, description, url} = newBone

    function handleChange(event){
        setNewBone(newBone=>({...newBone, [event.target.name]:event.target.value}))
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch(`/bones/${bone.id}`, {
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
                <label>Name </label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="name" 
                    value={name} 
                    onChange={handleChange} 
                />
                <br/>
                <label>Description </label>
                <input 
                    type="text" 
                    name="description" 
                    placeholder="description" 
                    value={description}
                    onChange={handleChange}
                />
                <br/>
                <label>Image URL </label>
                <input 
                    type="text" 
                    name="url" 
                    placeholder="url" 
                    value={url} 
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdateBone;