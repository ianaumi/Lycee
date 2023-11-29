import ".//EventStyles.css";
import Card from "../Card-component/Card";

export default function Event(){
    return(
        <>
        <div className="event-container">
            <h1>Upcomming Events</h1>

            <div className="event-cards">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        </>
    )
}