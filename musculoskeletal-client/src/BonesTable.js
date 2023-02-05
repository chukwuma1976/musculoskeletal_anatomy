import React from 'react';
import { useEffect, useState } from 'react';
import BoneTableRow from './BonesTableRow';

function BonesTable(){
    useEffect(() => {
        fetch('http://localhost:9292/bones')
        .then(response => response.json())
        .then(bones => setBones(bones));
      }, []);

    const [bones, setBones] = useState([]);
    const boneTableRows = bones.map(bone => <BoneTableRow key={bone.id} bone={bone} />)
    return (
        <div>
            <h2>Bones of the Skeleton</h2>
            {boneTableRows}
        </div>
    )
}

export default BonesTable;