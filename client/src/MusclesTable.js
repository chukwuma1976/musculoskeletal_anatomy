import React, { useState, useEffect } from 'react';
import MuscleTableRow from './MuscleTableRow';
import FilterByBodyPart from './FilterByBodyPart';
import FindByName from './FindByName';

function MusclesTable({bodyParts, setBodyParts, muscles, setMuscles}) {
    
    useEffect(() => {
        fetch('/bodyparts')
        .then(response => response.json())
        .then(bodyparts => {
            console.log(bodyparts)
            setBodyParts(bodyparts)});
    }, [])

    const [name, setName] = useState("")
    
    const muscleTableRows = muscles.map(muscle => 
        <MuscleTableRow key={muscle.id} muscle={muscle} onDelete={onDelete} onUpdate={onUpdate} />);
    
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
        console.log(allMuscleArray)
        setMuscles(allMuscleArray)
    }

    function createBodyPartMuscles(id){
        const identifier = parseInt(id)
        console.log(bodyParts, identifier)
        const bp = bodyParts.find(bodyPart => bodyPart.id===identifier)
        console.log(bp)
        setMuscles(bp.muscles)
    }

    function handleBodyPart(event){
        const id = event.target.value;
        if (id === 'All') createAllMuscles()
            else createBodyPartMuscles(id)
    }

    function displayFoundByName(name){
        if (name!== ""){
            const filteredMuscles = muscles.filter(muscle => muscle.name.includes(name.toLowerCase()));
            if (filteredMuscles.length > 0) return (
                <table>
                    {tableHeader}
                    {filteredMuscles.map(muscle => <MuscleTableRow muscle={muscle} onDelete={onDelete} onUpdate={onUpdate} />)}                  
                </table>
            )
        } 
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
            {displayFoundByName(name)}
            <br/>
            <table>
                {tableHeader}
                {muscleTableRows}
            </table>
        </div>
    )
}

export default MusclesTable;