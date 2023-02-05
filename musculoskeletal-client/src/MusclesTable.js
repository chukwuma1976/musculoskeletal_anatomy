import React from 'react';
import { useEffect, useState } from 'react';
import MuscleTableRow from './MuscleTableRow';

function MusclesTable(){
    useEffect(() => {
        fetch('http://localhost:9292/muscles')
        .then(response => response.json())
        .then(muscles => setMuscles(muscles));
      }, []);

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
            <table>
                {tableHeader}
                {muscleTableRows}
            </table>
        </div>
    )
}

export default MusclesTable;