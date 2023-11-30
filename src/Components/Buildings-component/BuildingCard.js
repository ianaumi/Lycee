import "./BuildingCardStyles.css";
import coecsaArt from "../../Assets/coecsa-art.png"

export default function BuildingCard(){
    return(
        <>
        
        <div className="building-container">
            <div className="building-description">
                    <h1>COECSA</h1>
                    <h3>College Of Engineering, Computer Studies and Architecture</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. equenean at quam mollis, tempus leo vel,</p>
            </div>
            <div className="building-img">
                <img src={coecsaArt} alt="card-img"></img>
            </div>
        </div>
        </>
    )
}