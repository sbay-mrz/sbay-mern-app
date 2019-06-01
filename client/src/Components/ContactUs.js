import React, { Component } from 'react';
import './../App.css';
import {Grid,Col,Row,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
import mapphone from './../assets/mapphone.png';

class ContactUs extends Component {
    render() {
        return (
            <div className="contactus" id='contact'>
                <h1> CONTACT US </h1>
                <Row>
                    <Col lg={6} sm={12}>
                        <div>
                            <img src={mapphone}/>
                        </div>
                    </Col>

                    <Col lg={6} sm={12}>
                      <Row>
                          <form>
                          <Col lg={6} >
                          <div>
                              <FormGroup controlId="formInlineName">
                                  <FormControl type="text" placeholder="enter name" />
                              </FormGroup>
                              <FormGroup controlId="formInlineName">
                                  <FormControl type="text" placeholder="enter email" />
                              </FormGroup>
                          </div>
                          </Col>

                          <Col lg={6}>
                          <div>
                              <FormGroup controlId="formInlineName">
                                  <FormControl type="text" placeholder="contact" />
                              </FormGroup>
                              <FormGroup controlId="formInlineName">
                                  <FormControl type="text" placeholder="company name" />
                              </FormGroup>
                          </div>
                          </Col>
                          <FormGroup controlId="formControlsTextarea">
                              <FormControl componentClass="textarea" placeholder="description of project" style={{ height: 150 }} />
                          </FormGroup>
                              <Button bsStyle="info"> Send </Button>
                          </form>
                      </Row>
                    </Col>

                </Row>
            </div>

        );
    }
}

export default ContactUs;
