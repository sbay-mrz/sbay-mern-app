import React,{Component} from 'react';
import { Fade } from 'react-slideshow-image';
import firstSliderImg from '../assets/mainslide6.jpg';
import secondSliderImg from '../assets/mainslide5.jpg';
import thirdSliderImg from '../assets/mainsilde3.jpg';
import masjidapp from '../assets/masjidapp.JPG'; 
import engine from '../assets/Engine.png';

const images = [
    engine,
   
    thirdSliderImg,
    masjidapp,
    secondSliderImg,
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 1500,
  infinite: true,
  indicators: true,
  scale: 0.3,
  arrows: true
}

class NewSlider extends Component {
    render() {
        return (
            <Fade className="slide-images" {...zoomOutProperties}>
              {
                images.map((each, index) => <img key={index} style={{width: "100%",height: "95%"}} src={each} />)
              }
            </Fade>
          )
    }
}

export default NewSlider;