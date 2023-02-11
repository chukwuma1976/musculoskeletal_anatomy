import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddSection from "./AddSection";

function AddMuscle({bodyParts, setBodyParts, muscles, setMuscles}) {
    const [newMuscle, setNewMuscle] = useState({
        name: "",
        origin: "",
        insertion: "",
        action: "",
        innervation: "",
        blood_supply: "",
        url: "",
        bodypart_id: ""
    })
    const {name, origin, insertion, action, innervation, blood_supply, url, bodypart_id} = newMuscle
    const navigate = useNavigate()

    // const [bodyPartsArray, setBodyPartsArray] = useState(bodyParts)

    function handleArray(element){
        // setBodyPartsArray([...bodyPartsArray, element])
        setBodyParts([...bodyParts, element])
        console.log(bodyParts)
    }

    function handleChange(event){
        setNewMuscle(newMuscle=>({...newMuscle, [event.target.name]:event.target.value}))
    }
    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:9292/muscles", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newMuscle)
            })
            .then(res=>res.json())
            .then(muscle=>setMuscles([...muscles, muscle]))
        navigate("/muscles")
    }

    const bodyPartsDropDownItems = bodyParts.map(bodyPart => 
        <option key={bodyPart.name} value={bodyPart.id} >{bodyPart.name}</option>)

    return (
        <div className="add_body_part">
            <h4>You can choose to add a new bodypart category </h4>
            <AddSection parameter={"bodyparts"} handleArray={handleArray} />
            <h4>Add a muscle by entering the information below</h4>
            <form onSubmit={handleSubmit}>
            <label>Region</label>
                <select name="bodypart_id" onChange={handleChange}>
                    <option></option>
                    {bodyPartsDropDownItems}    
                </select>
                <br/>                
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
                    name="action" 
                    placeholder="action" 
                    value={action} 
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

export default AddMuscle;;