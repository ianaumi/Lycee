import Navbar from "../Components/Navigation-component/Navbar";
import AboutLycee from "../Components/About-component/AboutLycee";
import { AiFillAliwangwang } from "react-icons/ai";
import Developer from "../Components/About-component/Developer";
import Footer from "../Components/Footer-component/Footer";
import Updates from "../Components/About-component/Updates";

export default function AboutPage(){
    return(
        <>
        <Navbar/>
        <AboutLycee/>
        <Developer/>
        <Updates/>
        <Footer/>
        </>
    )
}