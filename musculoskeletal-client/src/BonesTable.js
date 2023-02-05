import React from 'react';
import { useEffect, useState } from 'react';
import BoneTableRow from './BonesTableRow';
import FilterByRegion from './FilterByRegion';
import FindByName from './FindByName';

function BonesTable(){
    const [region, setRegion] = useState('bones');
    const [name, setName] = useState(null)
    const tableHeader = (
        <tr className='header'>
            <th>Name</th>
            <th>Description</th>
            <th>Image link</th>
        </tr> 
        )

    function handleRegion(event){
        if (event.target.value === 'All'){
            setRegion('bones')
        } else setRegion(`regions/${event.target.value}`);
    } 
    
    function handleSubmit(event){
        event.preventDefault();
        setName(event.target.value)
    }
    function displayFoundByName(name){
        if (name!== null){
            const bone = bones.find(bone => bone.name === name);
            if (bone) return (
                <table>
                    {tableHeader}
                    <BoneTableRow bone={bone} />
                </table>
            )    
        }
    }

    useEffect(() => {
        fetch(`http://localhost:9292/${region}`)
        .then(response => response.json())
        .then(bones => setBones(bones));
      }, [region]);

    const [bones, setBones] = useState([]);
    const boneTableRows = bones.map(bone => <BoneTableRow key={bone.id} bone={bone} />)
    return (
        <div>
            <h2>Bones of the Skeleton</h2>
            <FilterByRegion handleRegion={handleRegion}/>
            <FindByName setName={setName} handleSubmit={handleSubmit} structure={"bone"}/>
            {displayFoundByName(name)}           
            <table>
                {tableHeader}
                {boneTableRows}
            </table>
        </div>
    )
}

export default BonesTable;