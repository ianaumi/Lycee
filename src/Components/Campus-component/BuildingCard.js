import './BuildingStyles.css';
import { Link } from 'react-router-dom';

const BuildingCard = ({ buildingName, onCardClick, ...props }) => {

    return(
        <>
            <div className="building-card">
                <img src={props.buildingImg}/>
                <div className="building-content">
                    <h3>{props.title}</h3>
                    <h4>{props.location}</h4>
                    <p>{props.description}</p>
                    <Link>
                        <button type='button' onClick={() => onCardClick(buildingName)}>Navigate</button>
                    </Link>
                </div>  
            </div>
        </>
    )
    }
export default BuildingCard;