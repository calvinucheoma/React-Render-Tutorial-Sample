import React, {useState, useMemo, useCallback} from 'react';
import { MemoizedChildFive } from './ChildFive';


const ParentFour = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Chukwuma');

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    };

    const handleClick = () => {

    };

    const memoizedPerson = useMemo(() => person, []);

    const memoizedHandleClick = useCallback(handleClick, []);

    console.log('ParentFour Render');

  return (

    <div>
        <button onClick={() => setCount(c => c + 1)}> Count - {count} </button>
        <button onClick={() => setName('Ucheoma')}> Change name </button>
        {/* <MemoizedChildFive name={name} person={person} handleClick={handleClick}  />  */} 
                                {/* Correct way below */}
        <MemoizedChildFive name={name} person={memoizedPerson} handleClick={memoizedHandleClick} />
    </div>

  )

};

export default ParentFour;