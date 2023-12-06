import './HeroStyles.css';
import logo from '../../Assets/hero-logo.png'

export default function () {
    return(
        <>  
        <div className="hero-bg">
            <div className="hero-wrap">
                <div className="hero-left">
                    <h2>See everything everywhere.</h2>
                </div>
                
                <div className="her-right">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
        </>
    )
}