import React from 'react';
import { useEffect, useState } from 'react';
import MuscleTableRow from './MuscleTableRow';

function MusclesTable(){
    useEffect(() => {
        fetch('http://localhost:9292/muscles')
        .then(response => response.json())
        .then(muscles => setMuscles(muscles));
      }, []);

    const [muscles, setMuscles] = useState([]);
    const muscleTableRows = muscles.map(muscle => <MuscleTableRow key={muscle.id} muscle={muscle}/>);

    return(
        <div>
            <h2>Muscles involved in exercise</h2>
            {muscleTableRows}
        </div>
    )
}

export default MusclesTable;