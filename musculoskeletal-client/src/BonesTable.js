import React from 'react';
import { useEffect, useState } from 'react';
import BoneTableRow from './BonesTableRow';
import FilterByRegion from './FilterByRegion';

function BonesTable(){
    const [region, setRegion] = useState('bones');

    function handleRegion(event){
        console.log(event.target.value);
        if (event.target.value === 'All'){
            setRegion('bones')
        } else setRegion(`regions/${event.target.value}`);
        console.log(region);
    }   

    useEffect(() => {
        fetch(`http://localhost:9292/${region}`)
        .then(response => response.json())
        .then(bones => setBones(bones));
      }, [region]);

    const tableHeader = (
        <tr className='header'>
            <th>Name</th>
            <th>Description</th>
            <th>Image link</th>
        </tr> 
        )

    const [bones, setBones] = useState([]);
    const boneTableRows = bones.map(bone => <BoneTableRow key={bone.id} bone={bone} />)
    return (
        <div>
            <h2>Bones of the Skeleton</h2>
            <FilterByRegion handleRegion={handleRegion}/>
            <table>
                {tableHeader}
                {boneTableRows}
            </table>
        </div>
    )
}

export default BonesTable;