import card1 from "../../Assets/coecsa-event.jpg"
import logo1 from "../../Assets/coecsa-logo.png"

export default function Card (){
    return(
        <>
        <div className="card-container">
            <div>
                <img src={card1} alt='card'/>
            </div>

            <div className="card-body">
                <h4>COECSA NIGHT</h4>
                <p>It's finally here, COECSAns! The wait is over for the COECSA Night 2023! Cheer on as your favorite performers and your beloved student organizations battle it out to see who the best of the best is!</p>
            </div>

            <div className="card-footer">
                <img src={logo1} alt='logo'/>
                <p>COECSA |</p>
                <time>November 20, 2023</time>
            </div>
        </div>
        </>
    )
}