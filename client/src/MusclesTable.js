import React, { useState, useEffect } from 'react';
import MuscleTableRow from './MuscleTableRow';
import FilterByBodyPart from './FilterByBodyPart';
import FindByName from './FindByName';

function MusclesTable({bodyParts, setBodyParts, muscles, setMuscles}) {
    
    useEffect(() => {
        fetch('/bodyparts')
        .then(response => response.json())
        .then(setBodyParts);
    }, [])

    const [name, setName] = useState("")
    
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

    function createAllMuscles(){
        let allMuscleArray = []
        bodyParts.map(bodyPart => {
            return allMuscleArray = [...allMuscleArray,...bodyPart.muscles]
        })
        allMuscleArray = allMuscleArray.sort((a,b) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (nameA < nameB) {return -1;}
            if (nameA > nameB) {return 1;}
            return 0;
        })
        setMuscles(allMuscleArray)
    }

    function createBodyPartMuscles(id){
        const identifier = parseInt(id, 10)
        const bp = bodyParts.find(bodyPart => bodyPart.id===identifier)
        setMuscles(bp.muscles)
    }

    function handleBodyPart(event){
        const id = event.target.value;
        if (id === 'All') createAllMuscles()
            else createBodyPartMuscles(id)
    }

    function displayFilteredMuscles(name){
        const filteredMuscles = muscles.filter(muscle => muscle.name.toLowerCase().includes(name.toLowerCase()));
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
            <FilterByBodyPart bodyParts={bodyParts}  handleBodyPart={handleBodyPart}/>
            <FindByName setName={setName} structure={"muscle"} />
            <br/>
            <br/>
            <table>
                {tableHeader}
                {displayFilteredMuscles(name)}
            </table>
        </div>
    )
}

export default MusclesTable;