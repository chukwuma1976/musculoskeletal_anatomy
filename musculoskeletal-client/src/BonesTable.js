import React from 'react';
import { useState } from 'react';
import BoneTableRow from './BonesTableRow';
import FilterByRegion from './FilterByRegion';
import FindByName from './FindByName';

function BonesTable({regions, bones, setBones}){

    const [name, setName] = useState(null)

    const boneTableRows = bones.map(bone => <BoneTableRow key={bone.id} bone={bone} onDelete={onDelete} />)
    
    const tableHeader = (
        <tr className='header'>
            <th>Name</th>
            <th>Description</th>
            <th>Image link</th>
        </tr> 
        )

    function handleRegion(event){
        const id = event.target.value
        if (event.target.value === 'All'){
            fetch(`http://localhost:9292/bones`)
            .then(response => response.json())
            .then(data => setBones(data))
        } else {
            fetch(`http://localhost:9292/regions/${id}`)
            .then(response => response.json())
            .then(data => setBones(data.bones))            
        };
    } 
    
    function displayFoundByName(name){
        if (name!== null){
            const bone = bones.find(bone => name.toLowerCase()===bone.name);
            if (bone) return (
                <table>
                    {tableHeader}
                    <BoneTableRow bone={bone} />
                </table>
            )    
        }
    }
    function onDelete(id){
        const onDeleteArray = bones.filter(bone => bone.id !== id);
        console.log(onDeleteArray);
        setBones(bones.filter(bone => bone.id !== id));
    }

    return (
        <div>
            <h2>Bones of the Skeleton</h2>
            <FilterByRegion regions={regions} handleRegion={handleRegion}/>
            <FindByName setName={setName} structure={"bone"}/>
            <br/>
            {displayFoundByName(name)}   
            <br/>        
            <table>
                {tableHeader}
                {boneTableRows}
            </table>
        </div>
    )
}

export default BonesTable;