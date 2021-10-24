import React from 'react';
// import FormItem from './FormItem';

export default function Form({ fixKeys, configKeys, nextConfigKeys, obj }) {

  return (
    <div>
      {fixKeys.length > 0 &&
        fixKeys.map((key) => {
          return (
            <>
              <label>{key}</label>
              <input type='text' />
            </>
          );
        })}
      <h1>Config</h1>
      {configKeys.length > 0 &&
        configKeys.map((key) => {
          return (
            <>
              <label>{key}</label>
              <input type='text' />
            </>
          );
        })}
      <h1>data</h1>
      {/* {nextConfigKeys.length > 0 &&
        nextConfigKeys.map((key) => {
          return (
            <>
              <label>{key}</label>
              <input type='text' />
            </>
          );
        })} */}
    </div>
  );
}
