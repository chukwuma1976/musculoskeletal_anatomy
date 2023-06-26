import React, { useState, useEffect } from 'react';
import BoneTableRow from './BonesTableRow';
import FilterByRegion from './FilterByRegion';
import FindByName from './FindByName';

function BonesTable({regions, setRegions, bones, setBones}){

    useEffect(() => {
        fetch('/regions')
        .then(response => response.json())
        .then(regions => {
            console.log(regions)
            setRegions(regions)});
    }, [])

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

    function createAllBones(){
        let allBonesArray = []
        regions.map(region => {
            allBonesArray = [...allBonesArray,...region.bones]
        })
        allBonesArray = allBonesArray.sort((a,b) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (nameA < nameB) {return -1;}
            if (nameA > nameB) {return 1;}
            return 0;
        })
        console.log(allBonesArray)
        setBones(allBonesArray)
    }
    
    function createRegionBones(id){
        const identifier = parseInt(id)
        console.log(regions, identifier)
        const rg = regions.find(region => region.id===identifier)
        console.log(rg)
        setBones(rg.bones)
    }
    
    function handleRegion(event){
        const id = event.target.value;
        if (id === 'All') createAllBones()
            else createRegionBones(id)
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