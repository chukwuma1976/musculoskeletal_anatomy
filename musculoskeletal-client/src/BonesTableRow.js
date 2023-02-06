import React from 'react';
import Popup from 'reactjs-popup'
import { useState } from 'react';

function BoneTableRow({bone}){
    const {name, description, url} = bone
    const [showPopUp, setShowPopUp] = useState(false)
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>
                <button onClick={()=>setShowPopUp(true)}>expand</button>
                <img className='thumbnail' src={url} alt={name} />
                <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
                    <img className='enlarged' src={url} alt={name} />
                </PopUp>                
            </td>
        </tr>            
    )
}

export default BoneTableRow;