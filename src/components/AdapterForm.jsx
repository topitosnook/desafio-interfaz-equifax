import React from 'react';
import '../css/AdapterForm.css';
import { saveAs } from 'file-saver';
import YAML from 'yaml';

export default function AdapterForm() {
  const [id, setId] = React.useState('');
  const [stepName, setStepName] = React.useState('');
  const [dependencias, setDependencias] = React.useState('');
  const [mainClass, setMainClass] = React.useState('');

  const onSubmit = (evento) => {
    evento.preventDefault();

    // se construye un Json
    const jsonObject = {
      id: id,
      stepName: stepName,
      dependencias: dependencias,
      mainClass: mainClass,
    };

    // se pasa de Json a yaml
    const jsonToYaml = YAML.stringify(jsonObject, null, 2);

    // se descarga el archivo
    const blob = new Blob([jsonToYaml], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'mi-archivo.txt');
  };

  return (
    <div className='container'>
      <form action='' onSubmit={onSubmit} className='formulario'>
        <div className='row'>
          <div className='col'>
            <label htmlFor='inputId' className='form-label'>
              {' '}
              ID
            </label>
            <input type='text' id='inputId' className='form-control' placeholder='Ingrese ID' onChange={(evento) => setId(evento.target.value)} />

            <label htmlFor='inputStepName' className='form-label'>
              {' '}
              StepName
            </label>
            <input
              type='text'
              id='inputStepName'
              className='form-control'
              placeholder='Ingrese stepName'
              onChange={(evento) => setStepName(evento.target.value)}
            />
          </div>

          <div className='col'>
            <label htmlFor='inputDependencias' className='form-label'>
              {' '}
              Dependencias{' '}
            </label>
            <input
              type='text'
              className='form-control'
              id='inputDependencias'
              className='form-control'
              placeholder='Ingrese dependencias'
              onChange={(evento) => setDependencias(evento.target.value)}
            />

            <label htmlFor='inputMainClass' className='form-label'>
              {' '}
              MainClass{' '}
            </label>
            <input
              type='text'
              className='form-control'
              id='inputMainClass'
              className='form-control'
              placeholder='Ingrese mainClass'
              onChange={(evento) => setMainClass(evento.target.value)}
            />
          </div>
        </div>
        <div className='col-12'>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <button className='btn btn-primary me-md-2' type='submit'>
              Descargar
            </button>
            <button className='btn btn-light' type='button'>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
