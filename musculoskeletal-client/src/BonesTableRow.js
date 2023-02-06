import React from 'react';
import PopUp from './PopUp'
import { useState } from 'react';

function BoneTableRow({bone}){
    const {name, description, url} = bone
    const [showPopUp, setShowPopUp] = useState(false)
    return (
        <tr>
            <td>
                {name}
                <br/>
                <button>edit</button>
                <button>X</button>
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