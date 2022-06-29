import React, {useState} from 'react';



const ObjectUseState = () => {

    const initState = {
        fname: 'Bruce',
        lname: 'Wayne'
    };

    const [person, setPerson] = useState(initState);

    const changeName = () => {
        const newPerson = {...person};
        newPerson.fname = 'Clark';
        newPerson.lname = 'Kent';
        setPerson(newPerson);
    };

    console.log('ObjectUseState Render');


  return (

    <div>

        <button onClick={changeName}> {person.fname} {person.lname} </button>

    </div>

  )

};

export default ObjectUseState;