import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const TwoCarousel = ({ props }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (props) {
            setImages(props);
        }
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
            <div className='slider-container'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className='image-slide-container'>
                            <img src={image} alt={`slide-${index}`} className='one-images' />
                        </div>
                    ))}
                </Slider>
            </div>
    );
};

export default TwoCarousel;
