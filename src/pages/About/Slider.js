import React from 'react'
import img1 from './../../assets/hackathon/1675729114036.jpg'
import img2 from './../../assets/hackathon/1675729115173.jpg'
import img3 from './../../assets/hackathon/1675729115434.jpg'
import Carousel from 'react-bootstrap/Carousel';

export const Slider = () => {
    return (
        <>
            <div style={{ padding: '3%', backgroundColor: '#1D3F6C' }}>
                <Carousel >
                    <Carousel.Item interval={500}>
                        <h2 className="pb-2 border-bottom">HACKTHON UIZ 2023 SHARE IDEA</h2>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>SHARING IDEA</h3>
                            <p>particepation in hackathon uiz 2023 explaning the idea.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <h2 className="pb-2 border-bottom">HACKTHON UIZ 2023 PICH</h2>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>GIVING PICH</h3>
                            <p>
                                It was a realy nice experience to give a pech.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel >
            </div >
        </>

    );
}
