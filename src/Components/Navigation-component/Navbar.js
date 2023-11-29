import logo from '../../Assets/lycee-logo.png';
import { Component } from 'react';
import { NavbarData } from './Navbar-data';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default class Navbar extends Component {
    state = { clicked : false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }


    render(){
        return(
            <>
                <nav className='navbar-container'>
                    <a href='/'>
                        <img src={logo} className='lycee-logo'></img>
                    </a>
 
                    <ul id="navbar-items" className={this.state.clicked ? "#navbar-items active" : "#navbar-items"}> {/*maps item object to link*/}
                        {NavbarData.map((item,index) => {
                            return(
                                <li key = {index}>
                                    <Link className = {item.class} to = {item.url}>{item.title}</Link>
                                </li>
                            );
                        })}

                    </ul>
                    <div id="mobile-view" onClick={this.handleClick}>
                        <HiMenuAlt3 className="burger-menu"/>
                    </div>
                </nav>
            </>
        )
    }
}