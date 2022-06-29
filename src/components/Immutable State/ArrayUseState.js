import React, {useState} from 'react';


const ArrayUseState = () => {

  const initState = ['Bruce', 'Wayne'];

  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    const newPersons = [...persons];
    newPersons.push('Clark');
    newPersons.push('Kent');
    setPersons(newPersons);
  };

  console.log('ArrayUseState Render');

  return (

    <div>

        <button onClick={handleClick}> Click </button>

        {
            persons.map((person, index) => (
                <div key={index}>{person}</div>
            ))
        }

    </div>

  )

};

export default ArrayUseState;