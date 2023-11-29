import ".//EventStyles.css";
import Card from "../Card-component/Card";
import logo1 from "../../Assets/coecsa-logo.png";
import logo2 from "../../Assets/cfad-logo.png";
import logo3 from "../../Assets/cba-logo.png";
import event1 from "../../Assets/coecsa-event.jpg";
import event2 from "../../Assets/cba-event.jpg";
import event3 from "../../Assets/cfad-event.jpg";
export default function Event(){
        return(
            <>
            <div className="event-container">
                <h1>Upcomming Events</h1>
    
                <div className="event-cards">
                    <Card
                    banner={event1}
                    title="COECSA NIGHT"
                    logo={logo1}
                    name="COECSA"
                    date="November 29, 2023"
                    description="It's finally here, COECSAns! The wait is over for the COECSA Night 2023! Cheer on as your favorite performers and your beloved student organizations battle it out to see who the best of the best is!"
                    />

                    <Card
                    banner={event2}
                    title="CBA DAY"
                    logo={logo2}
                    name="CBA"
                    date="November 16, 2023"
                    description="Embrace the carnival fun and experience the CBA magic! As we are inviting all CBA Jaguars to join the CBA Day 'til Nigh𝐭 today, November 16, 2023!"
                    />

                    <Card
                    banner={event3}
                    title="ANTI-HERO"
                    logo={logo3}
                    name="CFAD"
                    date="October 26, 2023"
                    description="Get your villainy costumes on and let’s await for this wonderful annual Halloween celebration happening on October 26, 2023 at the Lyceum of the Philippines University Cavite Campus. "
                    />
                </div>
            </div>
            </>
        )
}

