import React from 'react';

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
            <td>{name} image</td>
        </tr>            
    )
}

export default MuscleTableRow;