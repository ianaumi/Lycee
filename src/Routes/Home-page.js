import Navbar from "../Components/Navigation-component/Navbar";
import Event from "../Components/Events-component/Event";
import Buildings from "../Components/Buildings-component/Buildings";

export default function Home(){
    return(
        <>
        <Navbar/>
        <Buildings/>
        <Event/>
        </>
    )
}