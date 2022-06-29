import React from 'react';


const ChildFive = ({name, person, handleClick}) => {

  console.log('ChildFive Render');

  return (

    <div>
        Hello {name} {person.fname} {person.lname}
    </div>

  )

};

export default ChildFive;

export const MemoizedChildFive = React.memo(ChildFive);