import Navbar from "../Components/Navigation-component/Navbar";
import Map from "../Components/Map-component/Map";
import Card from "../Components/Card-component/Card"
import Event from "../Components/Events-component/Event";

export default function Home(){
    return(
        <>
        <Navbar/>
        <Map/>
        <Event/>
        </>
    )
}