import Footer from "../Components/Footer-component/Footer";
import Navbar from "../Components/Navigation-component/Navbar";
import Events from "../Components/Events-component/Events";
import CTA from "../Components/About-component/CTA";

export default function EventPage(){
    return(

        <>
            <Navbar/>
            <Events/>
            <CTA/>
            <Footer/>   

        </>
    )
}