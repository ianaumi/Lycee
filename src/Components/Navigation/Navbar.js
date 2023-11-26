import logo from '../../Assets/lycee-logo.png';
import { Component } from 'react';
import { NavbarData } from './Navbar-data';
import { Link } from 'react-router-dom';
import '../Navigation/NavbarStyles.css';

export default class Navbar extends Component {
    render(){
        return(
            <>
                <nav className='navbar-container'>
                    <a href='/'>
                        <img src={logo} className='lycee-logo'></img>
                    </a>

                    <ul id="navbar-items"> {/*maps item object to link*/}
                        {NavbarData.map((item,index) => {
                            return(
                                <li key = {index}>
                                    <Link className = {item.class} to = {item.url}>{item.title}</Link>
                                </li>
                            );
                        })}

                    </ul>
                </nav>
            </>
        )
    }
}