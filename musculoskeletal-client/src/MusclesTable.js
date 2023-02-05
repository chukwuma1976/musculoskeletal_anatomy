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
            <td>Name</td>
            <td>Origin</td>
            <td>Insertion</td>
            <td>Action</td>
            <td>Innervation</td>
            <td>Blood Supply</td>
            <td>Image Link</td>
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