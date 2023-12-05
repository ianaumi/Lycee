import './FooterStyles.css';
import { AiFillAliwangwang } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Footer() {
    return(
        <>
        <section className='footer-wrap'>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <AiFillAliwangwang className='lycee-logo'/>lycee
                    </div>

                    <div className="icons">
                        <FaFacebookSquare/>
                        <FaInstagramSquare/>
                        <FaDiscord/>
                    </div>

                    <div className="email">
                        <MdEmail className='email-logo'/>  
                        <a href='/'>
                            <u>lumanog.dev@gmail.com</u>
                        </a>
                    </div>

                    <div className="footer-desc">
                        <p>This website is only a prototype. Expect bugs and other things.</p>
                        <p>For bugs, please report it imediately.</p>
                    </div>

                    <p className='copyright'>© Copyright Lycee 2023 All Rights Reserved.</p>
                </div>

                <div className="footer-content">
                    <h4>Project</h4>
                    <li><a href='/'>Status</a></li>
                    <li><a href='/'>Changelog</a></li>
                    <li><a href='/'>License</a></li>
                    <li><a href='/'>All versions</a></li>
                </div>

                <div className="footer-content">
                    <h4>Developers</h4>
                    <li><a href='/'>Repository</a></li>
                    <li><a href='/'>Collaborate with lycee</a></li>

                </div>

                <div className="footer-content">
                    <h4>Help</h4>
                    <li><a href='/'>Privacy Policy</a></li>
                    <li><a href='/'>Terms of Service</a></li>
                    <li><a href='/'>FAQs</a></li>
                </div>

            </div>
        </section>
        </>
    )
}