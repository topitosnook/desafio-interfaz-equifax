import React,{useState, useEffect} from 'react';
import { load } from 'js-yaml';
import '../css/formMay.css';

export default function Form() {

  const [data, setData] = useState([]);
  const [form, setform] = useState('');
  //const [fixKeys, setFixKeys] = useState([]);
  //const[obj,setObj] =useState([])

  useEffect(() => {
    fetch('data/config/filterClients.yml')
      .then((res) => res.blob())
      .then((blob) => blob.text())
      .then((yamlAsString) => {
        const aux = load(yamlAsString);
        setData(Object.entries(aux[0]));
        //setFixKeys(Object.keys(aux[0]));
        //setObj(Object.values(aux[0]));
      })
      .catch((err) => console.log('yaml err:', err));
  }, []);
  
  
  return (

  <div >
    
    {

        data.map((key) => {
          console.log(data); 
          return (
            <div className='divFormOne' key={key[0]} value={key[1]}>
              
              <form onSubmit={(e)=> e.preventDefault()}>
              <p>{key[0]}</p>
              <input type="text" onChange={(e)=>setform(e.target.value)} value={key[1].condition-2} />
              <p>{key[1].recordClass}1</p>
              </form>                            
            </div>
            )          
        })  
          
    }
    <button type="submit" onClick={()=>console.log(form)}> Guardar </button> 
    <p>{form}</p>
    
  </div>
  );
}
