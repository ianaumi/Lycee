
import firstfloor from "../../../../Assets/coecsa-firstfloor.svg";
import secondfloor from "../../../../Assets/coecsa-firstfloor.svg";
import thirdloor from "../../../../Assets/coecsa-thirdfloor.png";
import { useState } from "react";

import mapbg from "../../../../Assets/map-bg.png";

import "./CoecsaStyles.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Coecsa() {

    const [floorLevel, setFloorLevel] = useState(0);

    function increaseFloorLevel() {
        setFloorLevel((prevFloorLevel) => (prevFloorLevel + 1) % floors.length);
      }
    
      function decreaseFloorLevel() {
        setFloorLevel((prevFloorLevel) => (prevFloorLevel - 1 + floors.length) % floors.length);
      }

    const floors = [
        firstfloor, thirdloor,
    ];

    const floorNames = ['First Floor', 'Second Floor'];

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
                          <img src={floors[floorLevel]} alt="" />  
                        </TransformComponent>
                    </TransformWrapper>                    
                </div>
                <div className="coecsa-pagination">
                    <FaArrowAltCircleLeft 
                    className="arrow-left arrow"
                    onClick={decreaseFloorLevel}/>
                    <h1>{floorNames[floorLevel]}</h1>
                    <FaArrowAltCircleRight 
                    className="arrow-right arrow"
                    onClick={increaseFloorLevel}
                    />
                </div>
            </div>
        </>
    )
}