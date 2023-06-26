import React, { useState, useEffect } from 'react';
import BoneTableRow from './BonesTableRow';
import FilterByRegion from './FilterByRegion';
import FindByName from './FindByName';

function BonesTable({regions, setRegions, bones, setBones}){

    useEffect(() => {
        fetch('/regions')
        .then(response => response.json())
        .then(setRegions);
    }, [])

    const [name, setName] = useState("")
    
    const tableHeader = (
        <tr className='header'>
            <th>Name</th>
            <th>Description</th>
            <th>Image link</th>
        </tr> 
        )

    function createAllBones(){
        let allBonesArray = []
        regions.map(region => {
            return allBonesArray = [...allBonesArray,...region.bones]
        })
        allBonesArray = allBonesArray.sort((a,b) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })
        console.log(allBonesArray)
        setBones(allBonesArray)
    }
    
    function createRegionBones(id){
        const identifier = parseInt(id, 10)
        const rg = regions.find(region => region.id===identifier)
        setBones(rg.bones)
    }
    
    function handleRegion(event){
        const id = event.target.value;
        if (id === 'All') createAllBones()
            else createRegionBones(id)
    }
    
    function displayFilteredBones(name){
        const filteredBones = bones.filter(bone=>bone.name.toLowerCase().includes(name.toLowerCase()))
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
            <FilterByRegion regions={regions} handleRegion={handleRegion}/>
            <FindByName setName={setName} structure={"bone"}/>
            <br/>
            <br/>        
            <table>
                {tableHeader}
                {displayFilteredBones(name)}
            </table>
        </div>
    )
}

export default BonesTable;