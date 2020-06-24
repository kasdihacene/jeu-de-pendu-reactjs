import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import shuffle from 'lodash.shuffle'
import Card from './Card';
import PickedWord from './PickedWord';
import './../../App.css'


const UNKNOWN_LETTER = '❓';
const WORDS2 = ["REACTJS", "BOOTSTRAP", "UI", "DEVELOPPEUR","DOM","VIRTUAL"]
const WORDS = {"BOOTSTRAP":"Framework for UI","DEVELOPPEUR":"Engineer who writing code"}
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

        const {pickedWord, updatedWord} = this.state
        let updated = updatedWord.concat(letter)
        this.setState({updatedWord: updated })
    }

    render(){
        const {buttons, pickedWord, updatedWord,currentLetter} = this.state

        return (
            <Container>
                <Jumbotron fluid className="bg-dark text-white">
                    <h1>Jeu de pendu</h1>
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
                </Jumbotron>
            </Container>


        );
    }

}

export default Board;