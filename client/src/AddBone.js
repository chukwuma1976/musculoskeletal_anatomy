import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBone({regions, bones, setBones}) {
    const [errors, setErrors] = useState(null)
    const [newBone, setNewBone] = useState({
        name: "",
        description: "",
        url: "",
        region_id: ""
    })

    const {name, description, url, region_id} = newBone
    const navigate = useNavigate()
    
    function handleChange(event){
        setNewBone(newBone=>({...newBone, [event.target.name]:event.target.value}))
    }
    function handleSubmit(event){
        event.preventDefault()

        fetch(`/regions/${region_id}/bones`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newBone)
            }) 
            .then(res=>{
                if (res.ok){
                    res.json().then(bone=>setBones([...bones, bone]))
                    navigate("/bones_")
                } else {
                    res.json().then(errors=>setErrors(errors.errors))
                }
            })          
    }

    const regionsDropDownItems = regions.map(region => 
        <option key={region.name} value={region.id} >{region.name}</option>)

    return (
        <div className="add_body_part">
            <h3>Add a Bone by entering the information below</h3>
            {errors? errors.map(error=><p key={error} className="error">{error}</p>) : null}
            <form onSubmit={handleSubmit}>
                <label>Region</label>
                <select name="region_id" onChange={handleChange}>
                    <option></option>
                    {regionsDropDownItems}    
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

export default AddBone;;