import React, { useState } from 'react';
import PopUp from './PopUp'
import UpdateBone from './UpdateBone'
import DeleteBone from './DeleteBone';

function BoneTableRow({bone, onDelete, onUpdate}){
    const {name, description, url} = bone
    const [showPopUp, setShowPopUp] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    return (
        <tr>
            <td>
                {name.toUpperCase()}
                <br/>
                <button onClick={()=>setShowEdit(true)} >edit</button>
                <UpdateBone bone={bone} showPopUp={showEdit} closePopUp={()=>setShowEdit(false)} onUpdate={onUpdate} />
                <button onClick={()=>setShowDelete(true)}>delete</button>
                <DeleteBone 
                    bone={bone} 
                    showPopUp={showDelete} 
                    closePopUp={()=>setShowDelete(false)} 
                    onDelete={onDelete}
                />
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