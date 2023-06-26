import React, { useState, useEffect } from 'react';
import MuscleTableRow from './MuscleTableRow';
import FilterByBodyPart from './FilterByBodyPart';
import FindByName from './FindByName';

function MusclesTable({bodyParts, muscles, setMuscles}) {

    useEffect(() => {
        fetch('/muscles')
        .then(response => response.json())
        .then(setMuscles);
    }, [])

    const [name, setName] = useState("")

    const [bp, setBp] = useState("All")
    
    const tableHeader = (
        <tr className='header'>
            <th>Name</th>
            <th>Origin</th>
            <th>Insertion</th>
            <th>Action</th>
            <th>Innervation</th>
            <th>Blood Supply</th>
            <th>Image Link</th>
        </tr> 
        )

    function handleBodyPart(event){
        setBp(event.target.value)
    }

    function displayFilteredMuscles(){
        const filteredByBodyPart = muscles.filter(muscle => bp==="All" || bp.includes(`${muscle.bodypart_id}`))
        const filteredMuscles = filteredByBodyPart.filter(muscle => muscle.name.toLowerCase().includes(name.toLowerCase()));
        const musclesList = filteredMuscles.map(muscle => <MuscleTableRow key={muscle.id} muscle={muscle} onDelete={onDelete} onUpdate={onUpdate} />)
        return musclesList
    }

    function onDelete(id){
        setMuscles(muscles.filter(muscle =>muscle.id !== id));
    }

    function onUpdate(updatedMuscle){
        const updatedArray=muscles.map(muscle => {
            if (muscle.id === updatedMuscle.id) return updatedMuscle
                else return muscle
        })
        setMuscles(updatedArray)
    }

    return(
        <div>
            <h2>Muscles involved in exercise</h2>
            <div className='filter'>
                <FilterByBodyPart bodyParts={bodyParts}  handleBodyPart={handleBodyPart}/>
                <FindByName setName={setName} structure={"muscle"} />
            </div>
            <br/>
            <br/>
            <table className='anatomy-table'>
                {tableHeader}
                {displayFilteredMuscles()}
            </table>
        </div>
    )
}

export default MusclesTable;