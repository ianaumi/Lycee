import "./BuildingCardStyles.css";
import coecsaArt from "../../Assets/coecsa-art.png"

export default function BuildingCard(){
    return(
        <>
        <div className="building-container">
            <div className="building-img">
                <img src={coecsaArt} alt="card-img"></img>
            </div>
            
            <div className="building-description">
                <h3>COECSA</h3>
                <h4>Lorem Ipsum Doloremat Ipasikat Caomestas</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. equenean at quam mollis, tempus leo vel, feugiat leo. Vivamus id risus egestas, imperdiet sapien at, aliquet elit. Ut orci sem, auctor ut ligula sed, mattis pharetra nunc. Nulla est ex, interdum eu felis quis, consequat l</p>
            </div>
        </div>
        </>
    )
}