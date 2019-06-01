import React, { Component } from 'react'
import {Grid,Row,Col} from 'react-bootstrap';
import '../App.css';
import watch from './../assets/img2.jpg';
import jacket from './../assets/jacket.jpg';
import bulb from './../assets/bulb.jpg';
import perfume from './../assets/perfume.jpg';
import nailpolish from './../assets/nailpolish.jpg';
import shoe from './../assets/shoes.jpg';


export default class Categories extends Component {
  render() {
    return (
      <div className="categories-bg">
          <br/><br/>
        <h1 className="categories"> Explore popular categories </h1>
        <br/><br/>
        <Grid>
  <Row className="show-grid">
    
    <Col xs={12} sm={4} md={4} lg={2}>
      <span> 
      <div style={{ borderRadius: '50%',paddingLeft: '25px'}}>
      <img src={watch} alt="wrist watch" height="140" width="140" style={{borderRadius: '50%'}}/>
      </div>
      </span> 
    </Col>

    <Col xs={12} sm={4} md={4} lg={2}>
    <span >
    <div style={{paddingLeft: '25px',paddingTop: '10px'}}>
      <img src={jacket} alt="wrist watch" height="140" width="140" style={{borderRadius: '50%'}}/>
      </div>
      </span>
    </Col>


    <Col xs={12} sm={4} md={4} lg={2}>
    <span >
    <div style={{paddingLeft: '25px',paddingTop: '10px'}}>
      <img src={bulb} alt="wrist watch" height="140" width="140" style={{borderRadius: '50%'}}/>
      </div>
      </span>
    </Col>


    <Col xs={12} sm={4} md={4} lg={2}>
    <span >
    <div style={{paddingLeft: '25px',paddingTop: '10px'}}>
      <img src={perfume} alt="wrist watch" height="140" width="140" style={{borderRadius: '50%'}}/>
      </div>
      </span>
    </Col>



    <Col xs={12} sm={4} md={4} lg={2}>
    <span>
    <div style={{paddingLeft: '25px',paddingTop: '10px'}}>
      <img src={nailpolish} alt="wrist watch" height="140" width="140" style={{borderRadius: '50%'}}/>
      </div>
      </span>
    </Col>



    <Col xs={12}  sm={4} md={4} lg={2}>
     <span >
    <div style={{paddingLeft: '25px',paddingTop: '10px'}}>
      <img src={shoe} alt="wrist watch" height="140" width="140" style={{borderRadius: '50%'}}/>
      </div>
      </span>
    </Col>
  </Row>
  </Grid>
  <br/><br/>
      </div>
    )
  }
}