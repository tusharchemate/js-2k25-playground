import React, { useState } from 'react';

const Parent = () => {
  console.log('===parent');
  const [text, setText] = useState('');

  return (
    <div>
      <h1>Hey Tush </h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

      <Child name={text} />
      <Child3 />
    </div>
  );
};


export default Parent;


export const  Child =  React.memo((props)=> {
  // const {name} = props;
  console.log(props)
  console.log('Im in Child ====');

  const [text, setText] = useState('');

  return (
    <div>
      <h1>Hey Child </h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    </div>
  );
});


export const Child3 =()=> {
  console.log('Im in Child 3');
  
  return (
    <div>
      <h1>Hey Child3 </h1>

    </div>
  );
}
