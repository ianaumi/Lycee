
import firstfloor from "../../../../Assets/coecsa-firstfloor.svg";
import mapbg from "../../../../Assets/map-bg.png";

import "./CoecsaStyles.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Coecsa() {

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
                          <img src={firstfloor} alt="" />  
                        </TransformComponent>
                    </TransformWrapper>                    
                </div>
                <div className="coecsa-pagination">
                    <FaArrowAltCircleLeft />
                    <h1> 1st Floor</h1>
                    <FaArrowAltCircleRight />
                </div>
            </div>
        </>
    )
}