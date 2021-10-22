import React from 'react';

export default function FormItem({ key }) {
    if(key==='config'){
      return (<h1>{key}</h1>)
    }else{
      return(
        <h1>{key}</h1>
      )
    }
}
