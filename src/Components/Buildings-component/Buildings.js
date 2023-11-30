import "./Buildings.css";
import BuildingCard from "./BuildingCard";
import img1 from "../../Assets/coecsa-art.png" 

export default function Buildings(){

    return(
        <>
        <h1>Buildings</h1>
        <div className="buildings-container">
            <BuildingCard
            title="COECSA"
            sub="College of Engineering, Computer Studies and Architecture"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros non ipsum maximus mollis ut vel neque. Ut non ultricies sapien. Nulla facilisi."
            img={img1}
            />
            <BuildingCard/>
        </div>

        </>
    )
}
