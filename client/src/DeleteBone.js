import React from "react";

function DeleteBone({bone, showPopUp, closePopUp, onDelete}) {
    const {id, name} = bone;
    function removeBone(){
        fetch(`http://localhost:9292/bones/${id}`, {
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(()=>onDelete(id))
    }

    if (!showPopUp) return null;
    return (
        <div className="PopUp">
            <button onClick={closePopUp}>close</button>
            <p>Are you sure you want to remove {name}?</p>
            <p>If yes, then click delete below</p>
            <button onClick={removeBone}>Delete</button>
        </div>
    )
    }
export default DeleteBone