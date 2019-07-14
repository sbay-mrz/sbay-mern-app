import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Categories from './Components/Categories';
import CategoriesList from './Components/CategoriesList';
import Products from './Components/Products';
import Header2 from './Components/Header2';
import FrontTop from './Components/FrontTop';
import PrimarySearchAppBar from './Components/Slider2';
import Slider3 from './Components/slider3';
import Footers from './Components/Footers';
import Categories2 from './Components/Categories2';
import CardTwo from './Components/CardTwo';
import ExtraContent from './Components/ExtraContent';
import NewSlider from './Components/NewSlider';
import NewFooter from './Components/newFooter';
import ParticlesComponent from './Components/ParticlesComponent';

class App extends Component {
  render() {
    return (
      <div className="maindiv">
      
        <Slider3/>
        <NewSlider/>

        {/* <Slider/>  */}
        
         <CategoriesList/>
         {/* <CardTwo/> */}
         {/* {/* <Categories2/> */}
         <br/><br/>
         {/* <Categories/> */}
         <Products/>
         <ExtraContent/>
        <NewFooter/>
        
      </div>
    );
  }
}

export default App;
