
import { useState } from 'react';
import { saveAs } from 'file-saver';
import './App.css';

function App() {

  const [myValue, setMyValue] = useState('')

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
    }

    fileReader.onerror = () => {
      console.logo(fileReader.error);
    }

  }


  return (
    <div className="App">
      <header className="App-header">
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
          multiple={false}
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

