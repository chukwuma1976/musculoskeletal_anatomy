import React from "react";

function DeleteMuscle({muscle, showPopUp, closePopUp, onDelete}){
    const {name, id} = muscle;
    function removeMuscle(){
        fetch(`/muscles/${id}`, {
            method: "DELETE"
        })
        onDelete(id)
        closePopUp();
    }
    if (!showPopUp) return null;
    return (
        <div className="PopUp">
            <button onClick={closePopUp}>close</button>
            <p>Are you sure you want to remove {name}?</p>
            <p>If yes, then click delete below</p>
            <button onClick={removeMuscle}>Delete</button>
        </div>
    )
}

export default DeleteMuscle;