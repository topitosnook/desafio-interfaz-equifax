import React from 'react';
//import FormItem from './FormItem';

export default function Form({ fixKeys }) {
  // console.log(fixKeys);
  // for (let i = 0; i < fixKeys.length; i++) {
  //   return (<div> { fixKeys[i]}</div>)
  // }
  return(<div>
{
  fixKeys.length>0 && (
    fixKeys.map(key =>{
      return (<div>{key}</div>)
    })
  )
}
  </div>

  );
}
