import React, { createContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, FreeMode, Autoplay } from "swiper";

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import './slider.css'
import Selector from "../Selector/Selector";
import useTitle from "../../Hook/UsrHook";
const Home = () => {
    useTitle('home')
    const data = useLoaderData();
    const nagaviget = useNavigate()
    const [lode, setLode] = useState({})
   

    const [active, setActive] = useState()

    const handaler = (id) => {

        nagaviget(`/c/${id}`)
        
        
    }



    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="active">
                        <h1>Hello</h1>
                        <h3>{active ? active.name : data[0].name}</h3>
                    </div>
                </div>
                <div className="slider text-center col-md-9">

                    <Swiper
                    loop={true}
                    autoplay={{delay:1000}}
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{ 
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination,Autoplay]}
                    className="mySwiper"
                       
                    >
                        <div className="single-slider border">

                            {
                                data.map(locati => <SwiperSlide onClick={()=>handaler(locati.id)} key={locati.id}>
                                    <img src={locati.picture} alt="" />
                                    <h2 className="city">{locati.name}</h2>
                                    
                                    
                                </SwiperSlide>)
                            }
                        </div>

                    </Swiper>
                </div>
            </div>



          
        </div>

    );
};

export default Home;