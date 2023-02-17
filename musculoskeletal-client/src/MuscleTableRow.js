import React, { useState }from 'react';
import PopUp from './PopUp';
import UpdateMuscle from './UpdateMuscle';
import DeleteMuscle from './DeleteMuscle';

function MuscleTableRow({muscle, onDelete, onUpdate}) {
    const {name, origin, insertion, action, innervation, blood_supply, url} = muscle
    const [showPopUp, setShowPopUp] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    
    return (
        <tr>
            <td>
                {name.toUpperCase()}
                <br/>
                <button onClick={()=>setShowEdit(true)} >edit</button>
                <UpdateMuscle 
                    muscle={muscle} 
                    showPopUp={showEdit} 
                    closePopUp={()=>setShowEdit(false)} 
                    onUpdate={onUpdate}
                />
                <button onClick={()=>setShowDelete(true)} >delete</button>
                <DeleteMuscle 
                    muscle={muscle} 
                    showPopUp={showDelete} 
                    closePopUp={()=>setShowDelete(false)} 
                    onDelete={onDelete}
                />
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