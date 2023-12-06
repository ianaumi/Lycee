
import './UpdatesStyles.css';

import updateGif from "../../Assets/update-gif.gif";

export default function Updates() {
    return(
        <>
        <div className="update-wrap">
            <div className="update-container">
                <img src={updateGif} alt="" />
                <h1>Let's wait for the future updates!</h1>
            </div>
        </div>
        </>
    )
}