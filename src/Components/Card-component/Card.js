import "./CardStyles.css";

export default function Card (props){
    return(
        <>
            <div className="card-container">

                <div className="card-image">
                    <img src={props.banner} alt='card'/>
                </div>

                <div className="card-body">
                    <h3>{props.title}</h3>

                    <div className="card-footer">
                        <img src={props.logo} alt='logo'/>
                        <p>{props.name} |</p>
                        <time>{props.date}</time>
                    </div>

                    <p className="card-description">{props.description}</p>
                </div>

            </div>
        </>
    )
}