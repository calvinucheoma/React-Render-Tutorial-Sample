import React from 'react';



const ChildFour = ({name}) => {

  console.log('ChildFour Render');

  const date = new Date();

  return (

    <div>
        Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}: {' '} 
        {date.getSeconds()}
    </div>
//Here the time changes only when we click on the change number button and not the count button because of React.memo. Ideally, we do not want this. It also happens when we use random() function
  )

};

export default ChildFour;

export const MemoizedChildFour = React.memo(ChildFour);