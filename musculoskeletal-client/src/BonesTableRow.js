import React from 'react';

function BoneTableRow({bone}){
    const {name, description, url} = bone
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td onClick={()=>console.log(`${name} was clicked`)}>
                <img className='thumbnail' src={url} alt={name} />
            </td>
        </tr>            
    )
}

export default BoneTableRow;