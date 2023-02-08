import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBone() {
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
        console.log(newBone)
        fetch("http://localhost:9292/bones", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newBone)
            }) 
            .then(res=>res.json())
            .then(bone=>console.log(bone))
        navigate("/bones")
    }

    return (
        <div className="add_body_part">
            <h4>Add a Bone by updating the information below</h4>
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
                <label>Region ID </label>
                <input 
                    type="text" 
                    name="region_id" 
                    placeholder="region_id" 
                    value={region_id} 
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddBone;;