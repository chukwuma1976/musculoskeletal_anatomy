import React from 'react';
import { useEffect } from 'react-router-dom';

function DeleteStructure({id, structure}) {
    useEffect(() => {
        fetch(`http://localhost:9292/${structure}s/${id}`, {
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(bone=>console.log(bone))
        navigate("/bones")
    }, []);
    return (
        <p>This {structure} has been deleted!</p>
    )
}

export default DeleteStructure;