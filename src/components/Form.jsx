import React from 'react';
import FormItem from './FormItem';

export default function Form({ data }) {
  console.log(data);
  // for (let i = 0; i < data.length; i++) {
  //   if(data[i][0]==='config'){
  //     return <h1>'this is config'</h1>
  //   }else{
  //     return <h1>{data[i][0]}</h1>
  //   }
  // }
 
  return <h1>sdfas</h1>;
  //   return(
  //     {data.map((key,index)=>{
  //     return(<h1 key={index}>{key}</h1>)
  //   })}
  //   );
  //   // return (<h1>asd</h1>)
  //   //  let arr=[];
  //   // for (let i = 0; i < data.length; i++) {
  //   //   let key = data[i][0];
  //   //   return (
  //   //     <>
  //   //     <div>
  //   //       <FormItem key = {key} />
  //   //     </div>
  //   //     </>
  //   //   );
  //   //   // // console.log(data[i][0]);
  //   //   // if (data[i][0] === 'config') {
  //   //   //   console.log('This config');
  //   //   //   // return (<h1>{data[i][0]}</h1>)
  //   //   //   // return(<FormItem key={data[i][0]}/>)
  //   //   // } else {
  //   //   //   console.log(data[i][0]);
  //   //   // }
  //   // }

  //   // return (
  //   //   <>
  //   //     {data.map((item, index) => {
  //   //       console.log(item);
  //   //       return (<FormItem key={item[0]} />);
  //   //     })}
  //   //   </>
  //   // );

  //   // data.forEach((arr) => {
  //   //   console.log(arr)
  //   //   if (arr[0] === 'config') {
  //   //     return <h1>{arr[0]}</h1>;
  //   //   } else {
  //   //     return <h2>{arr[0]}</h2>;
  //   //   }
  //   // });
  //   // return (
  //   //   <div>
  //   //     {/* <form action=''>
  //   //       {fixKeys.map((key, index) => ({
  //   //          {if(key === 'config'){
  //   //           return  <Title />
  //   //          }}
  //   //           ))}
  //   //         {keysConfig.map((key,index) => (
  //   //         <div key={index}>
  //   //           <label htmlFor=''>{key}</label>
  //   //           <input type='text' />
  //   //         </div>
  //   //       }))}
  //   //     </form> */}
  //   //   </div>
  //   // );
}
