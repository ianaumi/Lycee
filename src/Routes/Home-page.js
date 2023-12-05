import Navbar from "../Components/Navigation-component/Navbar";
import Campus from "../Components/Campus-component/Campus";
import EventCard from "../Components/Events-component/Event-card";
import Events from "../Components/Events-component/Events";
import Hero from "../Components/Hero-component/Hero";
import Footer from "../Components/Footer-component/Footer";

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Campus/>
        <Events/>
        <Footer/>
        </>
    )
}