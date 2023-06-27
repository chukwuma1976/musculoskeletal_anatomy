import React from 'react'
import { useState } from "react";

function UpdateMuscle({muscle, showPopUp, closePopUp, onUpdate}) {
    const [newMuscle, setNewMuscle] = useState({
        name: muscle.name,
        origin: muscle.origin,
        insertion: muscle.insertion,
        actions: muscle.actions,
        innervation: muscle.innervation,
        blood_supply: muscle.blood_supply,
        url: muscle.url
    })
    const {name, origin, insertion, actions, innervation, blood_supply, url} = newMuscle

    function handleChange(event){
        setNewMuscle(newMuscle=>({...newMuscle, [event.target.name]:event.target.value}))
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch(`/muscles/${muscle.id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newMuscle)
            })
            .then(res=>res.json())
            .then(muscle=>onUpdate(muscle))
        closePopUp()
    }

    if (!showPopUp) {return null}
    return (
        <div className='PopUp'>
            <button onClick={closePopUp}>close</button>
            <h4>Update {muscle.name} by entering the changes in one or more parameters below</h4>
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
                <label>Origin </label>
                <input 
                    type="text" 
                    name="origin" 
                    placeholder="origin"
                    value={origin} 
                    onChange={handleChange}
                />
                <br/>
                <label>Insertion </label>
                <input 
                    type="text" 
                    name="insertion" 
                    placeholder="insertion" 
                    value={insertion} 
                    onChange={handleChange}
                />
                <br/>
                <label>Action </label>
                <input 
                    type="text" 
                    name="actions" 
                    placeholder="actions" 
                    value={actions} 
                    onChange={handleChange}
                />
                <br/>
                <label>Innervation </label>
                <input 
                    type="text" 
                    name="innervation" 
                    placeholder="innervation" 
                    value={innervation} 
                    onChange={handleChange}
                />
                <br/>
                <label>Blood Supply </label>
                <input 
                    type="text" 
                    name="blood_supply" 
                    placeholder="blood_supply" 
                    value={blood_supply} 
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

export default UpdateMuscle