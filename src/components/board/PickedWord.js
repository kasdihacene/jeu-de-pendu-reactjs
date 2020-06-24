
import React from 'react';
import './../../App.css'
import {InfoCircle} from 'react-bootstrap-icons';

const PickedWord = ({wordCripted, word, help, letter})=>(
    <div>
        <h1>
            <div className="card-header">
                {wordCripted}
            </div>
        </h1>
        <hr />
        <br />
        <InfoCircle />
            { help}
    </div>
    
)

export default PickedWord;