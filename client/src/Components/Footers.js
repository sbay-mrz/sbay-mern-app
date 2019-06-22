import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import fb from '../../src/assets/fb.png';
import whatsapp from '../../src/assets/whatsapp.png';
import messenger from '../../src/assets/messenger.png';
import pinterest from '../../src/assets/pinterest.png';
import instagram from '../../src/assets/instagram.png';


export default class Footers extends Component {
  render() {
    return (

      <div class="jumbotron">
      <div class="container">
  <div class="row">
    <div class="col-2">
      <img src={fb} width="50px"/>
    </div>
    <div class="col-2">
    <img src={messenger} width="50px"/>
    </div>
    <div class="col-2">
    <img src={instagram} width="50px"/>
    </div>
    <div class="col-2">
    <img src={pinterest} width="50px"/>
    </div>
    <div class="col-2">
    <img src={whatsapp}  width="50px"/>
    </div>
    <div class="col-2">
    <img src={fb} width="50px"/>
    </div>
   
  </div>
 
</div>
   </div>
 
    )
  }
}
