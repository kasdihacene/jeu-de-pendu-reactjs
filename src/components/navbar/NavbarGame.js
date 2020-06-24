import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import logo from "./../../assets/images/brand.png"
import './Navbar.css';

class NavbarGame extends React.Component{
    render(){
        return (
            <Navbar bg="dark" expand="lg">
                
                <Navbar.Brand href="#home">
                    <Image src={logo}
                    width={60}
                    height={60} 
                    roundedCircle alt="french pendu game" />
                    <span className="title-brand">
                    Jeu de pendu
                    </span>                
                </Navbar.Brand>

            </Navbar>
        );
    }
}

export default NavbarGame;