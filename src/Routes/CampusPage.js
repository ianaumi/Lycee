import Navbar from "../Components/Navigation-component/Navbar";
import Campus from "../Components/Campus-component/Campus";
import BuildingFloors from "../Components/Campus-component/Buildings/BuildingFloors";
import Footer from "../Components/Footer-component/Footer";
import CTA from "../Components/About-component/CTA";


// BUILDING FLOOR IMAGES ******************************************************
import coecsaFirstFloor from "../Assets/coecsa-firstfloor.png";
import coecsaSecondFloor from "../Assets/coecsa-secondfloor.png";

import annexFirstFloor from "../Assets/annex-firstfloor.png";
import annexSecondFloor from "../Assets/annex-secondfloor.png";

import jplFirstFloor from "../Assets/jpl-firstfloor.png";
import jplSecondFloor from "../Assets/jpl-secondfloor.png";

import { useState } from "react";

export default function CampusPage () {
    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const handleCardClick = (buildingName) => {
        setSelectedBuilding(buildingName);
    };

    const buildingFloorsMap = {
        coecsa: [coecsaFirstFloor, coecsaSecondFloor, coecsaFirstFloor],
        annex: [annexFirstFloor, annexSecondFloor, annexFirstFloor],
        arc: [annexFirstFloor, annexSecondFloor, annexFirstFloor],
        sotero: [annexFirstFloor, annexSecondFloor, annexFirstFloor],
        jpl: [jplFirstFloor, jplSecondFloor, jplFirstFloor],
      };

    return(
        <>
        <Navbar/>
        <Campus onCardClick={handleCardClick} />
        {selectedBuilding && (
            <BuildingFloors floors={buildingFloorsMap[selectedBuilding]}/>
        )}
        <CTA/>
        <Footer/>
        </>
    )
}