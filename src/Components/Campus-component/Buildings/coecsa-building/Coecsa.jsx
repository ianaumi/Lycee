
import firstfloor from "../../../../Assets/coecsa-firstfloor.svg";

import "./CoecsaStyles.css";

import { useGesture } from "@use-gesture/react";
import { useRef, useState } from "react";

export default function Coecsa() {

   
    let [crop, setCrop] = useState({ x: 0, y: 0, scale: 1 })
    let imageRef = useRef()

    useGesture(
        {
        onDrag: ({ offset:[dx, dy] }) => {
            setCrop((crop) => ({x:dx, y: dy}))
        },

        onPinch: ({ offset: [d] }) => {
            setCrop(crop => ({...crop, scale: 1 + d / 50}))
        }
    }, 
    {
        target: imageRef,
        eventOptions: { passive: false},
    }
    );

    return(
        <>  
            <div className="coecsa-container">
                <div className="img-container">
                    <img 
                    ref={imageRef} 
                    src={firstfloor} 
                    alt="" 
                    style={{
                        left: crop.x,
                        top: crop.y,
                        touchAction : "none",
                        transform: `scale(${crop.scale})`,
                    }}
                    />
                </div>
            </div>
        </>
    )
}