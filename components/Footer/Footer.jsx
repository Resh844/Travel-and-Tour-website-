import React,{useEffect} from "react";
import "./footer.css";
import video1 from "../../assests/video1.mp4";
import {FiSend} from "react-icons/fi";
import {MdTravelExplore} from "react-icons/md";
import {AiOutlineTwitter} from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";
import {AiFillYoutube} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";
import {FiChevronRight} from "react-icons/fi";

import Aos, { init } from "aos";
import 'aos/dist/aos.css';

const Footer =() =>{

    //creatiing react hook to add scrollable animations..

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video1} loop autoPlay muted type="video1/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up"className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel With Us</h2>
                    </div>


                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter E-mail address"/>
                        <button data-aos="fade-up" className="btn flex" type="submit">
                                Send<FiSend className="icon"/>

                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                            <MdTravelExplore className="icon" />
                                Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up"className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eligendi a earum officiis aspernatur soluta facere ad dolores minus maiores quod beatae iure ullam, atque esse magnam veritatis consequatur! Pariatur.
                        </div>

                        <div data-aos="fade-up" className="footerSocial flex">
                        <AiOutlineTwitter className="icon"/>
                        <FiInstagram  className="icon"/>
                        <AiFillYoutube  className="icon"/>
                        <FaTripadvisor  className="icon"/>
                        </div>
                    </div>

                    <div className="footerLinks grid">


                        {/* group 1 */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Payment
                            </li>
                        </div>

                        {/* group 2 */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            TripAdvisor
                            </li>
                        </div>

                        {/* group 3 */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                London
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Califoenia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Indonesia
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon"/>
                            Oceania
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - ISRATECH 2023</small>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}
export default Footer;