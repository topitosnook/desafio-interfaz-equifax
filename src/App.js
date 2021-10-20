
import { useState } from 'react';
import { saveAs } from 'file-saver';
import './App.css';
import { load } from 'js-yaml'
import { render } from 'react-dom'
import React from 'react'

function App() {
//https://stackblitz.com/edit/react-yaml
  const [myValue, setMyValue] = useState('')

  const [text, setText] = React.useState('')
  const [output, setOutput] = React.useState('')


  const log = ({target: {value: text}})  => Promise.resolve(text)
    .then(load)
    .then(t => JSON.stringify(t, null, 2))
    .then(setOutput)
    .then(() => localStorage.setItem('text', text))

  const createFile = () => {
    const blob = new Blob([myValue], { type: 'text/plain;charset=utf-8' }) // dar formato yaml
    saveAs(blob, 'mi-archivo.txt');
  }


  const readFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.readAsText(file);

    fileReader.onload = () => {
      console.log(fileReader.result);
      setMyValue(fileReader.result);
      setText(fileReader.result)
    }

    fileReader.onerror = () => {
      console.logo(fileReader.error);
    }

  }


  return (
    <div className="App">
      <header className="App-header">


    <h1>Archivo de Yaml a Json</h1>
      <textarea
        cols="30"
        rows="25"
        onChange={log}
        defaultValue={text}
        style={{width: '40%'}}>
      </textarea>
      <pre>
        <code>
          {output}
        </code>
      </pre>

        <h1>Leer y escribir archivos</h1>
        <textarea
          cols="30"
          rows="10"
          placeholder="Ingrese lo que desea grabar"
          value={myValue}
          onChange={(evento) => setMyValue(evento.target.value)}
        ></textarea>

        <br />

        <input
          type="file"
          multiple={true}
          onChange={readFile}
        />

        <br />

        <button onClick={createFile}>
          Guardar archivo
        </button>
      </header>
    </div>
  );
}

export default App;

