import logo from '../../Assets/lycee-logo.png'
import { Component } from 'react'

export default class Navbar extends Component(){
    render(){
        return(
            <>
                <nav>
                    <a href='/'>
                        <img src={logo}></img>
                    </a>
    
                    <div>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Map</a></li>
                            <li><a href='/'>Events</a></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}