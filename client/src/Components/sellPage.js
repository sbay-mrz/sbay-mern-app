import React from 'react';
import sell from './../assets/bulb.jpg';
import axios from 'axios';

class SellPage extends React.Component{
    
    constructor(){
        super();
        this.state = {
            pname: '',
            pdescription: '',
            exeurl: '',
            hosturl: '',
            demovideourl: '',
            category: ''

        }
        this.postProduct = this.postProduct.bind(this);
    }
    
    getName(evt){
        console.log(evt.target.value);
    this.setState({pname: evt.target.value});
    }
        
    getDesc(evt){
        console.log(evt.target.value);
    this.setState({pdescription: evt.target.value});
    }
        

    getCost(evt){
        console.log(evt.target.value);
    this.setState({pname: evt.target.value});
    }
        

    getDemovideoUrl(evt){
        console.log(evt.target.value);
    this.setState({demovideourl: evt.target.value});
    }
        

    getExeurl(evt){
        console.log(evt.target.value);
    this.setState({exeurl: evt.target.value});
    }
        

    getHosturl(evt){
        console.log(evt.target.value);
    this.setState({hosturl: evt.target.value});
    }


    // getcategory(evt){
    //     console.log(evt.target.value);
    // this.setState({pname: evt.target.value});
    // }
        
            postProduct(){
                var product= {
                    pname: this.state.pname,
                    pdescription: this.state.pdescription,
                    exeurl: this.state.exeurl,
                    demovideourl: this.state.demovideourl,
                    hosturl: this.state.hosturl,
                    cost: this.state.cost

                }
axios.post(`http://localhost:7000/products/postproduct`, product)
.then(res => {console.log(res);
})
}


    render()

    


    { 




        return(
     <section className="sellParent">
            <div>
                <h1>post your product</h1>
            </div>
            <form action="post" onSubmit={this.postProduct}>
            <div>
            <input class="form-control form-control-lg" type="text" placeholder="product name" name="pname" onChange={this.getName.bind(this)}/>
            <input class="form-control form-control-lg" type="text" placeholder="producr description" name="pdescription" onChange={this.getDesc.bind(this)}/>
            <input class="form-control form-control-lg" type="text" placeholder="exe file url" name="exe-url" onChange={this.getExeurl.bind(this)} />
            <input class="form-control form-control-lg" type="text" placeholder="host-url" name="host-url" onChange={this.getHosturl.bind(this)}/>
            <input class="form-control form-control-lg" type="text" placeholder="demo-video-url" name="demo-video-url" onChange={this.getDemovideoUrl.bind(this)}/>
            <input class="form-control form-control-lg" type="text" placeholder="cost" name="cost" onChange={this.getCost.bind(this)}/>
            <select class="form-control form-control-lg">
                <option>category</option>
            </select>
          <div>

          <input type="file"/>
          <input type="file"/>
          <input type="file"/>
          </div>
          <button type="button" class="btn btn-secondary btn-lg btn-block">submit</button>
            </div>
         </form>
         
     </section>
    )
    }
}
export default SellPage