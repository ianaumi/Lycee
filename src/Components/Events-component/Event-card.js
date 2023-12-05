import './EventCardStyles.css';
import cbaEvent from '../../Assets/cba-event.jpg'
import cbaLogo from '../../Assets/cba-logo.png'
import { IoNotificationsOutline } from "react-icons/io5";
import bellIcon from "../../Assets/bell-icon.png";

export default function() {
    return(
        <>
            <div className='event-container'>
                <img src={bellIcon} alt="" className='bell-icon'/>
                <div className='event-img'>
                    <img src={cbaEvent}/>
                </div>
                <div className='event-content'>
                    <h3>CBA DAY</h3>
                    <p>Embrace the carnival fun and experience the CBA magic! As we are inviting all CBA Jaguars to join the CBA Day 'til Night today, November 16, 2023!</p>
                    <div className='event-info'>
                        <div className='logo'>
                            <img src={cbaLogo}/>
                        </div>
                        <h4>CBA</h4>
                        <time>Nov 26 2023</time>
                    </div>
                </div>
            </div>
        </>
    )
}