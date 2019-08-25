import React, { Component } from 'react'
import {Carousel,Grid,Row,Col} from 'react-bootstrap';
import '../App.css';
import firstSliderImg from '../assets/mainslide6.jpg';
import secondSliderImg from '../assets/mainslide5.jpg';
import thirdSliderImg from '../assets/mainsilde3.jpg';
import masjidapp from '../assets/masjidapp.JPG';
import engine from '../assets/Engine.png'

export default class Slider extends Component {
  render() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide style-slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="sizeimg2" src={masjidapp} alt="First slide"/>
          <div class="carousel-caption d-none d-md-block">
          <h5>Find your Dream project</h5>
          <p>With SBay</p>
        </div>
        </div>
        <div class="carousel-item">
          <img class="sizeimg1 " src={secondSliderImg} alt="Second slide"/>
          <div class="carousel-caption d-none d-md-block">
          <h5>Find your Dream project</h5>
          <p>With SBay</p>
        </div>
        </div>
        <div class="carousel-item">
          <img class="sizeimg " src={firstSliderImg} alt="Third slide"/>
          <div class="carousel-caption d-none d-md-block">
          <h5>Let's plan your project</h5>
          <h5>With</h5>
          <p> SBay</p>
        </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    )
  }
}
