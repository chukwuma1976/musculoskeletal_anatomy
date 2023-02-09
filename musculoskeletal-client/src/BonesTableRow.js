import React from 'react';
import PopUp from './PopUp'
import UpdateBone from './UpdateBone'
import { useState } from 'react';

function BoneTableRow({bone, onDelete, onUpdate}){
    const {id, name, description, url} = bone
    const [showPopUp, setShowPopUp] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

    function removeBone(){
        fetch(`http://localhost:9292/bones/${id}`, {
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(()=>onDelete(id))
    }

    return (
        <tr>
            <td>
                {name.toUpperCase()}
                <br/>
                <button onClick={()=>setShowEdit(true)} >edit</button>
                <UpdateBone bone={bone} showPopUp={showEdit} closePopUp={()=>setShowEdit(false)} onUpdate={onUpdate} />
                <button onClick={removeBone}>X</button>
            </td>
            <td>{description}</td>
            <td>
                <img className='thumbnail' onClick={()=>setShowPopUp(true)} src={url} alt={name} />
                <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
                    <img className='enlarged' src={url} alt={name} />
                </PopUp>                
            </td>
        </tr>            
    )
}

export default BoneTableRow;