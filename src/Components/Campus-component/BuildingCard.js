import './BuildingStyles.css';
import coecsa from '../../Assets/coecsa-art.png';
import { Link } from 'react-router-dom';
import { Button } from '../Button-component/Button';


export default function BuildingCard(){
    return(
        <>
        <div className="building-card">
            <img src={coecsa}/>
            <div className="building-content">
                <h3>COECSA</h3>
                <h4>North</h4>
                <p>Lorem ipsum dolonsectetur adipiscing elitor sit amet, consectetur adipiscing elit. Cras eu eleifend sapien. </p>
                <Link to='/Campus'>
                    <button type='button'>Navigate</button>
                </Link>
            </div>
        </div>
        </>
    )
}