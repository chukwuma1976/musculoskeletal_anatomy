import React from 'react';
import { useEffect, useState } from 'react';
import MuscleTableRow from './MuscleTableRow';
import FilterByBodyPart from './FilterByBodyPart';
import FindByName from './FindByName';

function MusclesTable(){
    const [bodyPart, setBodyPart] = useState('muscles');
    const [name, setName] = useState(null)
    
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
        if (event.target.value === 'All'){
            setBodyPart('muscles')
        } else setBodyPart(`bodyparts/${event.target.value}`);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.value)
        setName(event.target.value)
    }
    function displayFoundByName(name){
        if (name!== null){
            const muscle = muscles.find(muscle => name.toLowerCase()===muscle.name);
            if (muscle) return (
                <table>
                    {tableHeader}
                    <MuscleTableRow muscle={muscle} />
                </table>
            )
        }
    }

    useEffect(() => {
        fetch(`http://localhost:9292/${bodyPart}`)
        .then(response => response.json())
        .then(data => {
            if (bodyPart === 'muscles') setMuscles(data)
                else setMuscles(data.muscles)
        });
      }, [bodyPart]);

    const [muscles, setMuscles] = useState([]);
    const muscleTableRows = muscles.map(muscle => <MuscleTableRow key={muscle.id} muscle={muscle}/>);

    return(
        <div>
            <h2>Muscles involved in exercise</h2>
            <FilterByBodyPart handleBodyPart={handleBodyPart}/>
            <FindByName setName={setName} handleSubmit={handleSubmit} structure={"muscle"}/>
            {displayFoundByName(name)}
            <table>
                {tableHeader}
                {muscleTableRows}
            </table>
        </div>
    )
}

export default MusclesTable;