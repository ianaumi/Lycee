import "./BuildingCardStyles.css";

export default function BuildingCard(props){
    return(
        <>
        <div className="building-container">
            <div className="building-description">
                    <h3>{props.title}</h3>
                    <h4>{props.sub}</h4>
                    <p>{props.description}</p>
            </div>
            <div className="building-img">
                <img src={props.img} alt="card-img"></img>
            </div>
        </div>
        </>
    )
}