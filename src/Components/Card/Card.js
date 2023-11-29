import card1 from "../../Assets/coecsa-event.jpg";
import logo1 from "../../Assets/coecsa-logo.png";
import "./CardStyles.css";

export default function Card (){
    return(
        <>
        <div className="card-container">
            <div className="card-image">
                <img src={card1} alt='card'/>
            </div>

            <div className="card-body">
                <h3>COECSA NIGHT</h3>
                <div className="card-footer">
                    <img src={logo1} alt='logo'/>
                    <p>COECSA |</p>
                    <time>November 20, 2023</time>
                </div>
                <p className="card-description">It's finally here, COECSAns! The wait is over for the COECSA Night 2023! Cheer on as your favorite performers and your beloved student organizations battle it out to see who the best of the best is!</p>
            </div>

        </div>
        </>
    )
}