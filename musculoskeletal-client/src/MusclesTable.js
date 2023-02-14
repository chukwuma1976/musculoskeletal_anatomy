import React from 'react';
import { useState } from 'react';
import MuscleTableRow from './MuscleTableRow';
import FilterByBodyPart from './FilterByBodyPart';
import FindByName from './FindByName';

function MusclesTable({bodyParts, muscles, setMuscles}) {
    
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

    function handleBodyPart(event){
        const id = event.target.value;
        if (event.target.value === 'All'){
            fetch(`http://localhost:9292/muscles`)
            .then(response => response.json())
            .then(muscles => setMuscles(muscles)); 
        } else {
            fetch(`http://localhost:9292/bodyparts/${id}`)
            .then(response => response.json())
            .then(bodypart => setMuscles(bodypart.muscles));
        }
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