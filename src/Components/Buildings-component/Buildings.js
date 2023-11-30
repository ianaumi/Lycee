import "./Buildings.css";
import BuildingCard from "./BuildingCard";
import img1 from "../../Assets/coecsa-art.png" 

export default function Buildings(){

    return(
        <>
        <div className="buildings-wrap">
            <h1 className="buildings-header">Buildings</h1>
            <div className="buildings-container">
                <BuildingCard
                title="COECSA"
                sub="College of Engineering, Computer Studies and Architecture"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget eros non ipsum maximus mollis ut vel neque. Ut non ultricies sapien. Nulla facilisi."
                img={img1}
                />

                <BuildingCard
                title="ANNEX"
                sub="LAUREL BUILDING"
                description="Lorem ipsum dolor Morbi eget eros non i it amet, consectetur adipiscing elit. Morbi eget eros non ipsum maximus mollis ut vel neque. Ut non ultricies sapien. Nulla facilisi."
                img={img1}
                />
            </div>
        </div>
        </>
    )
}
