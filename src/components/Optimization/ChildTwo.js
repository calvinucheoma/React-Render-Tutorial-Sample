import React from 'react';

const ChildTwo = () => {

 console.log('ChildTwo component');
 
  return (

    <div>
        ChildTwo Component
    </div>

  )

};

export default ChildTwo;

export const MemoizedChildTwo = React.memo(ChildTwo);