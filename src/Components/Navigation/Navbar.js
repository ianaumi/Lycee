import logo from '../../Assets/lycee-logo.png'
import { Component } from 'react'
import { NavbarData } from './Navbar-data'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render(){
        return(
            <>
                <nav className='navbar-items'>
                    <a href='/'>
                        <img src={logo}></img>
                    </a>

                    <ul> {/*maps item object to link*/}
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