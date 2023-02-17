import React, { useState } from 'react';
import BoneTableRow from './BonesTableRow';
import FilterByRegion from './FilterByRegion';
import FindByName from './FindByName';

function BonesTable({regions, bones, setBones}){

    const [name, setName] = useState("")

    const boneTableRows = bones.map(bone => 
        <BoneTableRow key={bone.id} bone={bone} onDelete={onDelete} onUpdate={onUpdate}/>)
    
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
            .then(bones => setBones(bones))
        } else {
            fetch(`http://localhost:9292/regions/${id}`)
            .then(response => response.json())
            .then(regions => setBones(regions.bones))            
        };
    } 
    
    function displayFoundByName(name){
        if (name!== ""){
            const filteredBones = bones.filter(bone => bone.name.includes(name.toLowerCase()));
            if (filteredBones.length > 0) return (
                <table>
                    {tableHeader}
                    {filteredBones.map(bone => <BoneTableRow bone={bone} onDelete={onDelete} onUpdate={onUpdate} />)}                  
                </table>
            )
        } 
    }

    function onDelete(id){
        setBones(bones.filter(bone => bone.id !== id));
    }

    function onUpdate(updatedBone){
        const updatedArray=bones.map(bone => {
            if (bone.id === updatedBone.id) return updatedBone
                else return bone
        })
        setBones(updatedArray)
        console.log(updatedBone, updatedArray)
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