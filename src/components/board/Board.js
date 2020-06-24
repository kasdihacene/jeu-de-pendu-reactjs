import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import shuffle from 'lodash.shuffle'
import Card from './Card';
import PickedWord from './PickedWord';
import './../../App.css'


const UNKNOWN_LETTER = '❓';
const WORDS2 = ["REACTJS", "BOOTSTRAP", "UI", "DEVELOPPEUR","DOM","VIRTUAL"]
const WORDS = {
    "BOOTSTRAP":" Un Framework pour le developpement des interfaces graphiques.",
    //"DOM VIRTUEL":" ReactJS utilise _____ pour augmenter les performances.",
    //"MODULES":" React est basé sur les _______.",
    "DEVELOPPEUR":" La personne qui écrit du code."}
class Board extends React.Component{
    
    generateButtons(){
        const alphabet = [];
        let index = 'A'.charCodeAt(0);
        const last = 'Z'.charCodeAt(0);
        for (; index <= last; index++) {
            alphabet.push(String.fromCharCode(index));
        }
        return shuffle(alphabet);
    }
    
    pickWord = () =>{
        let reordredList = shuffle(Object.keys(WORDS));
        let word = reordredList.pop();
        console.log('You seek for this word => '+word)
        return word;
    }
    
    state = {
        buttons: this.generateButtons(),
        pickedWord: this.pickWord(),
        updatedWord:'',
        currentLetter: '',
        attempts: 0
    }

    computeDisplay(phrase, usedLetters) 
    {  
        return phrase.replace(/\w/g,    (letter) => (usedLetters.includes(letter) ? letter : UNKNOWN_LETTER)  )
    }

    
    // Arrow fx for binding - else the state will be undefined
    handleClick = letter => {

        const {pickedWord, updatedWord, attempts} = this.state
        const newAttempts = attempts + 1
        let updated = updatedWord.concat(letter)
        let progressResult = this.computeDisplay(pickedWord,updated)
        this.setState({updatedWord: updated, attempts: newAttempts })
        
        console.log(progressResult)
    }

    render(){
        const {buttons, pickedWord, updatedWord,currentLetter, attempts} = this.state

        return (
            <Container>
                <Jumbotron fluid className="bg-dark text-white col-md-12">
                        
                    <Row>
                        <Col md={{ span: 4, offset: 8 }}>Nombre de tentatives : {attempts}</Col>
                    </Row>

                    <h1>Jeu de pendu - QCM React JS</h1>
                    <p> Le Pendu est un jeu consistant à trouver un mot en devinant quelles sont les lettres qui le composent.</p>
                    
                    {
                        <PickedWord 
                        wordCripted={this.computeDisplay(pickedWord,updatedWord)} 
                        word={pickedWord} 
                        help={WORDS[pickedWord]} 
                        letter={currentLetter}
                        />
                    }

                    <br />
                    <div className="row d-flex justify-content-center">

                    {
                        buttons.map((card,index)=>(
                            <Card
                            card={card} 
                            index={index}
                            onClick={this.handleClick}    
                            key={index}
                            />
                            ))
                        }
                    </div>
                </Jumbotron>
            </Container>


        );
    }

}

export default Board;