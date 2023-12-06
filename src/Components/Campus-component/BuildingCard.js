import './BuildingStyles.css';
import coecsa from '../../Assets/coecsa-art.png';
import { Link } from 'react-router-dom';
import { Button } from '../Button-component/Button';


export default function BuildingCard(props){
    return(
        <>
        <div className="building-card">
            <img src={props.eventImg}/>
            <div className="building-content">
                <h3>{props.name}</h3>
                <h4>{props.location}</h4>
                <p>{props.description}</p>
                <Link to='/Campus'>
                    <button type='button'>Navigate</button>
                </Link>
            </div>
        </div>
        </>
    )
}