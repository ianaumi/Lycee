import './EventCardStyles.css';
import cbaEvent from '../../Assets/cba-event.jpg'
import cbaLogo from '../../Assets/cba-logo.png'
import { IoNotificationsOutline } from "react-icons/io5";
import bellIcon from "../../Assets/bell-icon.png";

export default function(props) {
    return(
        <>
            <div className='event-card-container'>
                <div className="bell-icon-container">
                <img src={bellIcon} alt="" className='bell-icon'/>
                </div>
                <div className='event-img'>
                    <img src={props.eventImg}/>
                </div>
                <div className='event-content'>
                    <h3>{props.eventName}</h3>
                    <p>{props.eventDescription}</p>
                    <div className='event-info'>
                        <div className='logo'>
                            <img src={props.departmentLogo}/>
                        </div>
                        <h4>{props.departmentName}</h4>
                        <time>{props.eventDate}</time>
                    </div>
                </div>
            </div>
        </>
    )
}