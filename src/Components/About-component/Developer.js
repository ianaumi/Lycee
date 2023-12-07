import './DeveloperStyles.css';
import devImg from '../../Assets/dev-pic.png';


export default function Developer () {
    return(
        <>
        <div className="developer-wrap">
            <div className="developer-container">
                <div className="developer-content">
                    <div className="developer-left">
                        <img src={devImg} alt="" />
                    </div>
                    <div className="developer-right">
                        <h1>Developed by Ian!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et orci quis quam semper placerat. Etiam scelerisque, ante id semper suscipit, nulla enim tristique est, in maximus ex dolor nec nisi. Nunc non auctor orci, ac rhoncus nisi.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}