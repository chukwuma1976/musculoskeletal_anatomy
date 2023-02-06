import React from 'react';
import PopUp from './PopUp';
import { useState } from 'react';

function MuscleTableRow({muscle}){
    const {name, origin, insertion, action, innervation, blood_supply, url} = muscle
    const [showPopUp, setShowPopUp] = useState(false)
    return (
        <tr>
            <td>{name}</td>
            <td>{origin}</td>
            <td>{insertion}</td>
            <td>{action}</td>
            <td>{innervation}</td>
            <td>{blood_supply}</td>
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

export default MuscleTableRow;