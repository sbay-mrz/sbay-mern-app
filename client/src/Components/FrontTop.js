import React , {component, Component} from 'react';
import front from '../../src/assets/front.jpg';
import '../index.css';

export default class FrontTop extends Component {

    render(){
        return(
            <div className="FrontTop"> 
                <img src={front} alt="top"/>
            </div>
        )
    }
}