import React,{ Component} from 'react'
import classes from  '../App.module.css';
import Logo from '../assets/amazon.png'

function Header() {
    return(
        <div>
            <header className={classes.header}>
                <img className={classes.header_logo} src={Logo} alt="amazon logo"/>
            </header>
        </div>
    );
}

export default Header;