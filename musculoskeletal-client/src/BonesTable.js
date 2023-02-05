import React from 'react';
import { useEffect, useState } from 'react';
import BoneTableRow from './BonesTableRow';

function BonesTable(){
    useEffect(() => {
        fetch('http://localhost:9292/bones')
        .then(response => response.json())
        .then(bones => setBones(bones));
      }, []);

    const tableHeader = (
        <tr className='header'>
            <td>Name</td>
            <td>Description</td>
            <td>Image link</td>
        </tr> 
        )

    const [bones, setBones] = useState([]);
    const boneTableRows = bones.map(bone => <BoneTableRow key={bone.id} bone={bone} />)
    return (
        <div>
            <h2>Bones of the Skeleton</h2>
            <table>
                {tableHeader}
                {boneTableRows}
            </table>
        </div>
    )
}

export default BonesTable;