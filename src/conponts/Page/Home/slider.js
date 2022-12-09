import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = ({ foods }) => {
    const { name, picture } = foods
    console.log(foods);
    return (
        <Carousel.Item >
            <img
                className="d-block w-100"
                src={picture}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>
                     Consectetur adipisicing elit. Architecto vero veniam mollitia aut quae dignissimos repellendus reprehenderit delectus aliquid molestiae?adipisicing elit. Architecto vero veniam mollitia aut quae dignissimos repellendus reprehenderit delectus aliquid
                </h3>
            </Carousel.Caption>
        </Carousel.Item>
        // <div>
        //     <h3>{name}</h3>
        // </div>
    );
};

export default Slider;