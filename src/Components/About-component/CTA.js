
import './CTAStyles.css';
import { Link } from 'react-router-dom';

export default function Updates() {
    return(
        <>
            <div className="cta-wrap">
                <div className="cta-container">
                    <p>Meet new friends while waiting for future updates!</p>
                    <h1>Join the Unofficial LPU Cavite Discord server </h1>
                    <Link to ='https://discord.gg/zmg4asRAUM'>
                        <button type='text'>JOIN</button>                          
                    </Link>
                </div>
            </div>
        </>
    )
}