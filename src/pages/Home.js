import React from 'react';
import firstHomeImg from '../assets/imgHome1.jpg'
import secondHomeImg from '../assets/imgHome2.jpg'
import thirdHomeImg from '../assets/imgHome.jpg'

import '../Styles/Home.css';
function Home() {
  return (
    <div>
                <div id="carouselExampleControls" className="carousel slide  " data-ride="carousel">
                     <div className="carousel-inner">
                         <div className="carousel-item active">
                    <img className="d-block w-100 img" src={firstHomeImg} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 img" src={secondHomeImg} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100 img" src={thirdHomeImg} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    </div>
  )
}

export default Home
