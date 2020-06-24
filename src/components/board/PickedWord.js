
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
        
            <h5>
                <InfoCircle />
                {help}
            </h5>
    </div>
    
)

export default PickedWord;