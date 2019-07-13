import React,{component, Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Card,CardActions,CardMedia,CardActionArea,CardContent,Typography,Button} from '@material-ui/core';
import {Grid,Row,Col} from 'react-bootstrap';
import Slider3 from './slider3';
import Products from './Products';
import '../App.css';
import auth from './Auth';


 class customerProfile extends Component{

    constructor(){
        super();
        this.state = {
            customerProfile: {},
            updateCustomer: false,
            name: '',
            email: '',
            contact: '',
            address: ''
        }
    }

    componentDidMount(){

      var user= JSON.parse(localStorage.getItem('userProfile'));
      // console.log(user._id);
      if(!localStorage.getItem('userProfile')){
        this.props.history.push('/customerLogin')
      }

        const { id } = this.props.match.params;
        axios(`https://sbay-mrz.herokuapp.com/customers/${id}`)
        .then(res =>{
            const user = res.data;
            this.setState({ customerProfile: user });
        })
    }

    updateCustomer(){
        this.setState({ updateCustomer: !this.state.updateCustomer})
    }

    updateSeller(){
        this.setState({ updateSeller: !this.state.updateSeller})
    }
    
    getName(e){
        this.setState({name: e.target.value});
      }
    
      getAddress(e){
        this.setState({address: e.target.value});
      }
    
      getEmail(e){
        this.setState({email: e.target.value});
      }
    
      getContact(e){
        this.setState({contact: e.target.value});
      }
    
      logout(){
        auth.login(() => {
            this.props.history.push("/");
    localStorage.removeItem('userProfile');
          });
    }


    updatePro(){
        alert('hello');
        const { id } = this.props.match.params;
    
          let userObject = {
               name: this.state.name,
              address: this.state.address,
              contact: this.state.contact,
              email: this.state.customerProfile.email,
              password: this.state.customerProfile.password
            }

          axios.patch(`https://sbay-mrz.herokuapp.com/customers/${id}`,userObject)
          .then(res =>{
              console.log(res.data);
              const user = res.data;
              console.log("users",user)
          })  
          this.setState({updateCustomer : !this.state.updateCustomer})
          window.location.reload();

      }
render(){
    const {customerProfile} = this.state;
    return(
     <div className="cProfileParent">
     <Slider3/>

    {!this.state.updateCustomer &&
         <div className="cProfileContainer">
     
         <div className="c-profile-div-one">
            <div className="c-profile-div-one-1">
                {/* <img src="#" alt="#"/>*/}
                 <h3> {customerProfile.name} </h3> 
                 
                 <Link to={`/newProductRequest/${customerProfile._id}`} > <button type="button" class="btn btn-primary btn-lg abc">Request For New Product </button> </Link>
            </div>
            <div className="c-profile-div-one-2">
               {/**/} <div>
                    <span><i class="fas fa-address-card"></i></span>
                    <span><i class="fas fa-envelope"></i></span>
                    <span><i class="fas fa-mobile-alt"></i></span>
                </div>
                 <div>
                 <p> Address </p> 
            
                    <p> email </p> 
                     <p> contact </p> 
                 </div>
             </div>
            <div className="c-profile-div-one-3">
              <p> {customerProfile.address} </p> 
              <p> {customerProfile.email} </p> 
                 <p> {customerProfile.contact} </p> 
                <p> <Link to={`/Myrequests/${customerProfile._id}`}> my requests </Link> </p>
                <Button onClick={this.updateCustomer.bind(this)}>  edit profile </Button>
                
                <Button onClick={this.logout.bind(this)}>  logout </Button>

            </div>
         </div>
         <br/>
         <div className="c-profile-div-two">
            <div><h1>Your Products</h1></div>
             <Products/>
         </div>
     </div>
    }

       {/* <slider3/>
       <Grid>
  <Row className="show-grid">

    <Col xs={4} sm ={12} md={4} lg={4}>
    <Card >
      <CardActionArea>
        <CardContent >
            <div className="icons">
            <img src="" alt="user"/>
            <p> {customerProfile.sname} </p> 
            <p> {customerProfile.address} </p> 
            <p> {customerProfile.email} </p> 
            <p> {customerProfile.contact} </p> 
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
    </Col>
    
    
    <Col xs={4} sm ={12} md={4} lg={8}> 
    <CardActionArea>
        <CardContent >
            <div className="icons">
            <p> {customerProfile.name} </p> 
            <Link to={`/newProductRequest/${customerProfile._id}`}> request for new product </Link>
            </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Col>
    </Row>
       </Grid>*/}




{this.state.updateCustomer && 

    <div>
    <h2> Edit customer </h2>
  <form method="post" >
  <Row> 

<Col> 

<div class="form-group">
{/* <p>   <img src={this.state.sellerProducts[index].screenShot} width="80%" height="60%"/> </p>  */}

<label for="name">Name:</label>
<input type="name" class="form-control" id="name" value={this.state.name} onChange={this.getName.bind(this)}/>
</div>

<div class="form-group">
<label for="exeUrl">Address:</label>
<input type="text" class="form-control" id="address" value={this.state.address} onChange={this.getAddress.bind(this)}/>
</div>

<div class="form-group">
<label for="demovideourl">Contact :</label>
<input type="text" class="form-control" id="contact" value={this.state.contact} onChange={this.getContact.bind(this)}/>
</div>
</Col>



  </Row>




 <p> <Button onClick={this.updatePro.bind(this)}> update </Button> </p> 


</form>
</div>
}


        </div> 
    )
}

}

export default customerProfile