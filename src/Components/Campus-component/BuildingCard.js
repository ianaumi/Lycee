import './BuildingStyles.css';
import coecsa from '../../Assets/coecsa-art.png';
import { Button } from '../Button-component/Button';


export default function BuildingCard(){
    return(
        <>
        <div className="wrap">
        <div className="building-card">
            <img src={coecsa}/>
            <div className="building-content">
            <h3>COECSA</h3>
            <h4>North</h4>
            <p>Lorem ipsum dolonsectetur adipiscing elitor sit amet, consectetur adipiscing elit. Cras eu eleifend sapien. </p>
            <button>Navigate</button>
            </div>
        </div>
        </div>
        
        </>
    )
}