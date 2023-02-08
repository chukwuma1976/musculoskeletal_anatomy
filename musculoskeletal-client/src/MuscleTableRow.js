import React from 'react';
import PopUp from './PopUp';
import UpdateMuscle from './UpdateMuscle';
import { useState } from 'react';

function MuscleTableRow({muscle}){
    const {id, name, origin, insertion, action, innervation, blood_supply, url} = muscle
    const [showPopUp, setShowPopUp] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    
    function removeMuscle(){
        fetch(`http://localhost:9292/muscles/${id}`, {
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(muscle=>console.log(muscle))
    }

    function editMuscle(){
        return (
            <div>
                <PopUp showPopUp={showEdit} closePopUp={()=>setShowEdit(false)}>
                    <UpdateMuscle muscle={muscle} />
                </PopUp> 
            </div>
        )
    }
    
    return (
        <tr>
            <td>
                {name.toUpperCase()}
                <br/>
                <button onClick={()=>setShowEdit(true)} >edit</button>
                {editMuscle()}
                <button onClick={removeMuscle} >X</button>
            </td>
            <td>{origin}</td>
            <td>{insertion}</td>
            <td>{action}</td>
            <td>{innervation}</td>
            <td>{blood_supply}</td>
            <td>
                <img className='thumbnail' onClick={()=>setShowPopUp(true)} src={url} alt={name} />
                <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
                    <img className='enlarged' src={url} alt={name} />
                </PopUp>
            </td>
        </tr>            
    )
}

export default MuscleTableRow;