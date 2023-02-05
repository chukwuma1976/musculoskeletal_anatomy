import React from 'react';

function BoneTableRow({bone}){
    const {name, description, url} = bone
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td onClick={()=>console.log("I was clicked")}>{name} image</td>
        </tr>            
    )
}

export default BoneTableRow;