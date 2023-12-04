import logo from '../../Assets/lycee-logo.png';
import { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { AiFillAliwangwang } from "react-icons/ai";
import { NavbarData } from './NavbarData';
import { Button } from '../Button-component/Button';

export default function Navbar (){
    const [click,setCLick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setCLick(!click);
    const closeMobileMenu = () => setCLick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <AiFillAliwangwang className='lycee-logo'/>lycee
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <HiMenuAlt3 className="burger-menu"/>
                    </div> 
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        {NavbarData.map((item,index) => {
                            return (
                                <li key={index} className='nav-item'>
                                    <Link to ={item.url} className={item.class} onClick={closeMobileMenu}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}