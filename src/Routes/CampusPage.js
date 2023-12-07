import Navbar from "../Components/Navigation-component/Navbar";
import Campus from "../Components/Campus-component/Campus";
import Coecsa from "../Components/Campus-component/Buildings/coecsa-building/Coecsa";

export default function CampusPage () {
    return(
        <>
        <Navbar/>
        <Campus/>
        <Coecsa/>
        </>
    )
}