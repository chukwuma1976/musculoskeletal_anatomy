import React from 'react';
import PopUp from './PopUp';

function MuscleTableRow({muscle}){
    const {name, origin, insertion, action, innervation, blood_supply, url} = muscle
    return (
        <tr>
            <td>{name}</td>
            <td>{origin}</td>
            <td>{insertion}</td>
            <td>{action}</td>
            <td>{innervation}</td>
            <td>{blood_supply}</td>
            <td onClick={()=>console.log(`${name} was clicked`)}>
                <img className='thumbnail' src={url} alt={name} />
            </td>
            {/* <td>
                <PopUp>
                    <img className='thumbnail' src={url} alt={name} />
                </PopUp>
            </td> */}
        </tr>            
    )
}

export default MuscleTableRow;