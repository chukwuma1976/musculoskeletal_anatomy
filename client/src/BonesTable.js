import React, { useState, useEffect } from 'react';
import BoneTableRow from './BonesTableRow';
import FilterByRegion from './FilterByRegion';
import FindByName from './FindByName';

function BonesTable({regions, bones, setBones}){

    useEffect(() => {
        fetch('/bones')
        .then(response => response.json())
        .then(setBones);
    }, [])

    const [name, setName] = useState("")
    const [reg, setReg] = useState("All")
    
    const tableHeader = (
        <tr className='header'>
            <th>Name</th>
            <th>Description</th>
            <th>Image link</th>
        </tr> 
        )
    
    function handleRegion(event){
        setReg(event.target.value)
    }
    
    function displayFilteredBones(name){
        const filteredByRegion = bones.filter(bone => reg==="All" || reg.includes(`${bone.region_id}`))
        const filteredBones = filteredByRegion.filter(bone=>bone.name.toLowerCase().includes(name.toLowerCase()))
        const bonesList = filteredBones.map(bone=><BoneTableRow key={bone.id} bone={bone} onDelete={onDelete} onUpdate={onUpdate} />)
        return bonesList
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
    }

    return (
        <div>
            <h2>Bones of the Skeleton</h2>
            <div className='filter'>
                <FilterByRegion regions={regions} handleRegion={handleRegion}/>
                <FindByName setName={setName} structure={"bone"}/>
            </div>
            <br/>
            <br/>        
            <table className="anatomy-table">
                {tableHeader}
                {displayFilteredBones(name)}
            </table>
        </div>
    )
}

export default BonesTable;