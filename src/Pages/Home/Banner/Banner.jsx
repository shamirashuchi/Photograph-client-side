import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Banner = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
            <h2 className='text-5xl mt-10 mb-10 text-center text-purple-600 underline'>ClickHaven</h2>
            <Carousel responsive={responsive}>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl h-96">
                            <figure><img src="mountain.jpeg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Landscape Photography</h2>
                                <p>Landscape photography is a genre of photography that focuses on capturing the beauty and grandeur of natural landscapes</p>
                            </div>
                    </div>
                </div>
                <div>
                <div className="card w-96 bg-base-100 shadow-xl h-96">
                            <figure><img src="grouppic.avif" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Portrait Photography</h2>
                                <p>Portrait photography is a genre of photography focused on capturing the essence, personality, and unique characteristics of individuals or groups of people.</p>
                            </div>
                    </div>
                </div>
                <div>
                <div className="card w-96 bg-base-100 shadow-xl h-96">
                            <figure><img src="flower.avif" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Macro Photography</h2>
                                <p>Display close-up shots of intricate details, such as flowers, insects, or textures.</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl h-96">
                            <figure><img src="starry-night-sky.avif" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Night Photography</h2>
                                <p>Feature stunning images captured during the nighttime, such as cityscapes, starry skies, or light trails.</p>
                            </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;