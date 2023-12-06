import './AboutLyceeStyles.css';
import lyceeLogo from '../../Assets/lycee-app-logo.png';

export default function AboutLycee () {
    return(
        <>
            <div className="about-lycee-wrap">
                <div className="about-lycee-container">
                    <div className="content">
                        <div className="about-lycee-left">
                        <h1>About lycee</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et orci quis quam semper placerat. Etiam scelerisque, ante id semper suscipit, nulla enim tristique est, in maximus ex dolor nec nisi. Nunc non auctor orci, ac rhoncus nisi.</p>
                        </div>
                    <div className="about-lycee-right">
                        <img src={lyceeLogo} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}