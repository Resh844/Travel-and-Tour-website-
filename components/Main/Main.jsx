import React,{useEffect} from "react";
import "./main.css";
import {HiLocationMarker} from "react-icons/hi";
import img from '../../assests/img1.jpg';
import img3 from '../../assests/img3.jpg';
import img4 from '../../assests/img4.jpeg';
import img5 from '../../assests/img5.jpeg';
import img6 from '../../assests/img6.jpeg';
import im2 from '../../assests/im2.jpg';
import img10 from '../../assests/img10.jpeg';
import img12 from '../../assests/img12.jpeg';
import img13 from '../../assests/img13.jpg';
import {BsClipboard2CheckFill} from "react-icons/bs";

import Aos, { init } from "aos";
import 'aos/dist/aos.css';

//array aned data

const Data= [
    {
        id:1,
        imgSrc: img,
        destTitle:'Lempuyang Temple',
        location:'Indonesia',
        grade:'CULTURAL RELAX',
        fees:'$59',
        description:'Pura Penataran Agung Lempuyang is a Balinese Hindu temple or pura on Mount Lempuyang in Karangasem Regency, Bali. It is the first and lowest temple of the complex of temples called Pura Lempuyang.Pura Lempuyang Luhur is also one of the nine directional temples (Pura Kahyangan Padma Bhuwana) of Bali, with each of the nine temples marking a cardinal direction plus the center. Pura Lempuyang Luhur represents the east direction (purwa) and the color white. This direction is associated with the domain of the Balinese god Iswara. '

    },
    {
        id:2,
        imgSrc: img3,
        destTitle:'Sydney Opera House',
        location:'Sydney',
        grade:'CULTURAL RELAX',
        fees:'$119',
        description:"The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.Designed by the Danish architect Jørn Utzon, its unique and innovative design represents a breakthrough in modern architecture. The iconic sail-like structures have made it a symbol of Sydney and modern Australia as a whole.When the Opera House opened its doors in 1973."

    },
    {
        id:3,
        imgSrc:img4,
        destTitle:'Kedarnath Temple',
        location:'Uttarakhand,India',
        grade:'CULTURAL RELAX',
        fees:'$595',
        description:"Kedarnath Temple (Sanskrit: केदारनाथ मंदिर, IAST: Kēdāranātha Mandira,'temple of the God of the field')is a Hindu temple,one of the twelve jyotirlinga of Shiva.The temple is located on the Garhwal Himalayan range near the Mandakini river,in the state of Uttarakhand, India.At a height of 3,583m(11,755ft),223km(139mi)from Rishikesh,on the shores of Mandakini river,a tributary of Ganga,is a stone edifice of unknown date.The presiding image of Kedarnath in the form of lingam is more triangular in shape with a pedestal 3.6m(12 ft)in circumference and 3.6 m (12 ft) in height. "

    },
    {
        id:4,
        imgSrc:img5,
        destTitle:'Jog Falls',
        location:'shivamogga,karnataka',
        grade:'CULTURAL RELAX',
        fees:'$59',
        description:'Jog Falls is a waterfall on the Sharavati river located in Siddapur taluk of Uttara Kannada district and its view point in Kargal town of Shimoga district,Karnataka,India.It is the second highest plunge waterfall in India.It is a segmented waterfall which depends on rain and season to become a plunge waterfall. Also known by alternative names of Gerusoppe Falls Gersoppa Falls, and Jogada Gundi, it is one of the highest waterfalls in India. During monsoons,one can see a breathtaking view of the falls with rainbows coming every now and then.'

    },
    {
        id:5,
        imgSrc:img6,
        destTitle:'Stone Chariot-Hampi',
        location:'Karnataka',
        grade:'CULTURAL RELAX',
        fees:'$59',
        description:'Hampi, the small, dainty temple village set in Karnataka, it’s the iconic stone chariot. It’s the leading man in the army of exquisite beautiful sights that Hampi offers and depicts Karnataka tourism as an icon itself.For Hampi, the small, dainty temple village set in Karnataka,it’s the iconic stone chariot. It’s the leading man in the army of exquisite beautiful sights that Hampi offers and depicts.Stone Chariot, Vittala Temple, Hampi,facts about HampiStone Chariot at Vittala Temple,HampiThe chariot is actually a shrine dedicated to Garuda,built inside the Vittala Temple Complex.'

    },
    {
        id:6,
        imgSrc:im2,
        destTitle:'Rohtang La',
        location:'India',
        grade:'Mountain pass',
        fees:'$100',
        description:"Rohtang Pass is a high mountain pass on the eastern end of the Pir Panjal Range of the Himalayas around 51 km from Manali in the Indian state of Himachal Pradesh. It connects the Kullu Valley with the Lahaul and Spiti Valleys of Himachal Pradesh, India.This region is accessible only from May to November but expects higher footfall around peak season (June to September) when visitors mostly come here looking forward to enjoying striking scenery amidst cooler temperatures.it is one of the beutiful valley of India."

    },
    {
        id:7,
        imgSrc:img10,
        destTitle:'Kapas Biru Waterfall',
        location:'Indonesia',
        grade:'CULTURAL RELAX',
        fees:'$190',
        description:'Waterfall cascading around 328-feet through red cliffs reached by a mile-long hike from parking lot.Kapas Biru Waterfall is the first of a trio of awesome waterfalls that can be visited on a day trip from Malang or Lumajang, East Java.Also known as Air Terjun Kapas Biru (in Indonesian), this is a huge waterfall set against an orange rock wall, surrounded by prehistoric looking jungles and giant bamboo trees.The name Air Terjun Kapas Biru means ‘blue cotton waterfall’ and probably comes from the hazy blue color of the falls in the evening.'

    },
    {
        id:8,
        imgSrc:img12,
        destTitle:'Colosseum',
        location:'Italy',
        grade:'Historical landmark',
        fees:'$295',
        description:'The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.The Colosseum was the scene of thousands of hand-to-hand combats between gladiators, of contests between men and animals, and of many larger combats, including mock naval engagements. However, it is uncertain whether the arena was the site of the martyrdom of early Christians.'

    },
    {
        id:9,
        imgSrc:img13,
        destTitle:'Golden Bridge',
        location:'Ba Na Hills,Vietnam',
        grade:'CULTURAL RELAX',
        fees:'$200',
        description:'The Golden Bridge is a 150-metre-long pedestrian bridge in the Bà Nà Hills resort, near Da Nang, Vietnam. It is designed to connect the cable car station with the gardens and to provide a scenic overlook and tourist attraction.The Golden Bridge in Vietnam is a new architectural construction that sets the location inside the entertainment-tourism complex Ba Na Hills. The root of the name “Golden Bridge” comes from its gilded railing frame.The Golden Bridge Da Nang is one of the most incredible and photogenic bridges in the world, located within the Sun World Ba Na Hills resort near Da Nang, Vietnam.'

    },

]

const Main =() =>{

    //creatiing react hook to add scrollable animations..

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return(
        
        <section className="main Container section">
            <div className="SecTitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited destinations
                </h3>
            </div>

                <div className="secContent grid">
                    {/* here we are going to use high order array method(map).to do that we shall use a list of objects in one array.create an array named data and from that we shall .map() array to fetch each destinations at once */}


                    {
                        Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                            return(
                                <div key={id} data-aos="fade-up"className="singleDestination">
                                    {/* here it will return the single id from the map array */}
                                    <div className="imageDiv">
                                        <img src={imgSrc} alt={destTitle} />
                                    </div>

                                    <div className="cardInfo">
                                        <h4 className="destTitle">{destTitle}</h4>
                                        <span className="continent flex">
                                            <HiLocationMarker className="icon" />
                                            <span className="name">{location}</span>
                                        </span>

                                        <div className="fees flex">
                                            <div className="grade">
                                                <span>{grade}<small>+1</small></span>
                                            </div>

                                            <div className="price">
                                                <h5>{fees}</h5>
                                            </div>
                                        </div>

                                        <div className="desc">
                                            <p>{description}</p>
                                        </div>

                                        <button className="btn flex">
                                            DETAILS <BsClipboard2CheckFill className="icon"/>
                                        </button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
        </section>
    )
}
export default Main