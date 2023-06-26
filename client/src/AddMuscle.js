import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMuscle({bodyParts, muscles, setMuscles}) {
    const [errors, setErrors] = useState(null)
    const [newMuscle, setNewMuscle] = useState({
        name: "",
        origin: "",
        insertion: "",
        actions: "",
        innervation: "",
        blood_supply: "",
        url: "",
        bodypart_id: ""
    })
    const {name, origin, insertion, actions, innervation, blood_supply, url, bodypart_id} = newMuscle
    const navigate = useNavigate()

    function handleChange(event){
        setNewMuscle(newMuscle=>({...newMuscle, [event.target.name]:event.target.value}))
    }
    function handleSubmit(event){
        event.preventDefault()

        fetch(`/bodyparts/${bodypart_id}/muscles`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newMuscle)
            })
            .then(res=>{
                if (res.ok){
                    res.json().then(muscle=>setMuscles([...muscles, muscle]))
                    navigate("/muscles_")
                } else {
                    res.json().then(errors=>setErrors(errors.errors))
                }
            })                
    }

    const bodyPartsDropDownItems = bodyParts.map(bodyPart => 
        <option key={bodyPart.id} value={bodyPart.id} >{bodyPart.name}</option>)

    return (
        <div className="add_body_part">
            <h3>Add a muscle by entering the information below</h3>
            {errors? errors.map(error=><p>{error}</p>): null}
            <form onSubmit={handleSubmit}>
                <label>Body Part</label>
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

export default AddMuscle;;