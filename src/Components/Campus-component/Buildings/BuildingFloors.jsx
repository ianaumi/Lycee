
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

// ICONS
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import "./BuildingFloorsStyles.css";

export default function Coecsa(props) {

    const [floorLevel, setFloorLevel] = useState(0);

    function increaseFloorLevel() {
        setFloorLevel((prevFloorLevel) => (prevFloorLevel + 1) % props.floors.length);
    }
    
    function decreaseFloorLevel() {
        setFloorLevel((prevFloorLevel) => (prevFloorLevel - 1 + props.floors.length) % props.floors.length);
    }

    const FloorNames = ['First Floor', 'Second Floor', 'Third FLoor'];

    return(
        <>  
            <div className="coecsa-container">
                <div className="img-container" style={{
                    backgroundColor:'#8c0001',
                }}>

                    <TransformWrapper 
                    defaultScale = {1}
                    defaultPositionX = {300}
                    defaultPositionY = {300}>

                        <TransformComponent>
                            {/*array of floors of coecsa*/}
                          <img src={props.floors[floorLevel]} alt="" />  
                        </TransformComponent>

                    </TransformWrapper>      
                                  
                </div>

                <div className="coecsa-pagination">
                    <FaArrowAltCircleLeft 
                    className="arrow-left arrow"
                    onClick={decreaseFloorLevel}/>


                         {/*buildng floors level name array*/}
                     <h1>{FloorNames[floorLevel]}</h1>

                    <FaArrowAltCircleRight 
                    className="arrow-right arrow"
                    onClick={increaseFloorLevel}
                    />
                </div>

            </div>
        </>
    )
}