import React,{useState} from 'react';
import FormMay from './FormMay';

export default function ButtonOne () {
    const [appear, setappear] = useState(false)
    const onClick = () => setappear(!appear)
    return (
        <React.Fragment>
        <button type='button' onClick={onClick}>filter clients with bad data</button>
        {appear ? <FormMay /> : null}
        </React.Fragment>
    )
}
