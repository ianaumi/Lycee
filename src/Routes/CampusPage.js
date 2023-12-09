import Navbar from "../Components/Navigation-component/Navbar";
import Campus from "../Components/Campus-component/Campus";
import BuildingFloors from "../Components/Campus-component/Buildings/BuildingFloors";
import Footer from "../Components/Footer-component/Footer";
import CTA from "../Components/About-component/CTA";


// BUILDING FLOOR IMAGES ******************************************************
import firstfloor from "../Assets/coecsa-firstfloor.svg";
import secondfloor from "../Assets/coecsa-firstfloor.svg";
import thirdloor from "../Assets/coecsa-thirdfloor.png";
import test from "../Assets/coecsa-art.png"

import { useState } from "react";

export default function CampusPage () {
    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const handleCardClick = (buildingName) => {
        setSelectedBuilding(buildingName);
    };

    const buildingFloorsMap = {
        coecsa: [firstfloor, thirdloor],
        annex: [test],
        sotero: [thirdloor],
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