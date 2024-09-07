import React,{useEffect} from "react";
import "./home.css";
import video from "../../assests/video.mp4";
import {GrLocation} from "react-icons/gr";
import {HiFilter} from "react-icons/hi";
import {FaYoutube} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaPinterest} from "react-icons/fa";
import {FaList} from "react-icons/fa";
import {TbApps} from "react-icons/tb";

import Aos, { init } from "aos";
import 'aos/dist/aos.css';


const Home=() => {

//creatiing react hook to add scrollable animations..

    useEffect(()=>{
            Aos.init({duration:2000})
    },[])

    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent Container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Serach Your Holiday!
                    </h1>
                </div>

                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>

                        <div className="input flex">
                            <input type="text" placeholder="Enter name here..."/>
                            <GrLocation  className="icon"/>
                        </div>
                    </div>


                    <div className="dateInput">
                        <label htmlFor="date">Select your date:</label>

                        <div className="input flex">
                            <input type="date"/>
                        </div>
                    </div>


                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price:</label>
                            <h3 className="total">$5000</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    <div className="searchoptions flex">
                    <HiFilter className="icon"/>
                    <span>More Filters</span>
                    </div>

                </div>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FaYoutube className="icon"/>
                        <FaInstagram className="icon"/>
                        <FaPinterest className="icon"/>
                    </div>

                    <div className="leftIcons">
                        <FaList className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home