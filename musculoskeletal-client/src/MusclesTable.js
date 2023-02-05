import React from 'react';
import { useEffect, useState } from 'react';
import MuscleTableRow from './MuscleTableRow';
import FilterByBodyPart from './FilterByBodyPart';

function MusclesTable(){
    const [bodyPart, setBodyPart] = useState('muscles');

    function handleBodyPart(event){
        console.log(event.target.value);
        if (event.target.value === 'All'){
            setBodyPart('muscles')
        } else setBodyPart(`bodyparts/${event.target.value}`);
        console.log(bodyPart);
    }

    useEffect(() => {
        fetch(`http://localhost:9292/${bodyPart}`)
        .then(response => response.json())
        .then(muscles => setMuscles(muscles));
      }, [bodyPart]);

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

    const [muscles, setMuscles] = useState([]);
    const muscleTableRows = muscles.map(muscle => <MuscleTableRow key={muscle.id} muscle={muscle}/>);

    return(
        <div>
            <h2>Muscles involved in exercise</h2>
            <FilterByBodyPart handleBodyPart={handleBodyPart}/>
            <table>
                {tableHeader}
                {muscleTableRows}
            </table>
        </div>
    )
}

export default MusclesTable;