import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Table,Button} from 'react-bootstrap';
import { removeFromCart } from '../actions/PostActions';
import { number } from 'prop-types';
import Slider3 from './slider3';



class Cart extends Component {
constructor(props){
  super(props);

  const array = props.cart.map(() => {
    return 0;
  });
this.state ={
  value: '',
  netAmountArray: array
}
this.handleChange = this.handleChange.bind(this)
}

  componentDidMount(){
    this.props.removeFromCart();
  }


  handleChange(event){
    const index = event.target.id;
    const netAmount = event.target.value * this.props.cart[index].cost;
    const localArray = this.state.netAmountArray;
    localArray[index] = netAmount;
    this.setState({
      netAmountArray: localArray
    });
    console.log(
      index,netAmount,localArray,
      this.state.netAmountArray)
  }

  handleDelete(index, event, value){
    var localArray = this.state.netAmountArray;
    localArray.splice(index, 1);
    this.setState({netAmountArray: localArray});
    this.props.removeFromCart(event.target.id);
  }
  
  render() {
    var count = 0, temp = 0;
    const totalPrice = this.state.netAmountArray.map(elm=>(
      temp+=elm
    ));
    console.log("hello" ,this.props.cart)
    return (
      <div className="cart-component">
        <Slider3/>
        <h2 style={{textAlign: 'center'}}> Cart Component </h2> 
        <Table responsive>
  <thead>
    <tr>
    <th>image</th>
    
      <th>Name</th>
      <th>Cost</th>
      <th>Category</th>
      <th>quantity</th>
      <th>total cost</th>
      <th>Remove</th>
      
    </tr>
  </thead>
  <tbody>
   
   {this.props.cart.map((obj,index)=>{
     return(
       <tr>
        
       <td><img  src= {obj.screenShot}/> </td> 
         <td> {obj.pname} </td> 
         <td> {obj.cost} </td>  
         <td> {obj.category} </td> 
         <td> <input type="number" id={index} onChange={this.handleChange}/> </td> 
         <td> {this.state.netAmountArray[index]}</td> 
         <td> <Button bsStyle="danger" id={obj._id} onClick={this.handleDelete.bind(this,index)}>  Delete </Button> </td> 
       </tr> 
     )
   })}
  
     <div style={{textAlign: 'center'}}>
       <h3> Total Price </h3>
       <h5> {totalPrice[(totalPrice.length)-1]} </h5>
     </div>
  
  </tbody>
</Table>
      </div>
                       
    )
  }
}

const mapStateToProps = (state) => {
    return {
        cart: state.posts.cart,
        cartcounter: state.posts.cartcounter
    }
}


export default connect(mapStateToProps,{removeFromCart})(Cart);




// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import {Table,Button} from 'react-bootstrap';
// import { removeFromCart } from '../actions/PostActions';
// import { number } from 'prop-types';
// import Slider3 from './slider3';



// class Cart extends Component {
// constructor(props){
//   super(props);

//   const array = props.cart.map(() => {
//     return 0;
//   });
// this.state ={
//   value: '',
//   netAmountArray: array
// }
// this.handleChange = this.handleChange.bind(this)
// }

//   componentDidMount(){
//     this.props.removeFromCart();
//   }


//   handleChange(event){
//     const index = event.target.id;
//     console.log("myindex",event.target.value);
//     const netAmount = event.target.value*this.props.cart[index].cost;
//     const localArray = this.state.netAmountArray;
//     localArray[index] = netAmount;
//     this.setState({
//       netAmountArray: localArray
//     });
//     console.log(
//       index,netAmount,localArray,
//       this.state.netAmountArray)
//   }

//   handleDelete(index, event, value){
//     var localArray = this.state.netAmountArray;
//     localArray.splice(index, 1);
//     this.setState({netAmountArray: localArray});
//     this.props.removeFromCart(event.target.id);
//   }
  
//   render() {
//     var count = 0, temp = 0;
//     const totalPrice = this.state.netAmountArray.map(elm=>(
//       temp+=elm
//     ));
//     console.log("hello" ,this.props.cart)
//     return (
//       <div>
//         <Slider3/>
//         <h2 style={{textAlign: 'center'}}> Cart Component </h2> 
//         <Table responsive>
//   <thead>
//     <tr>
//     <th>image</th>
    
//       <th>Name</th>
//       <th>Cost</th>
//       <th>Category</th>
//       <th>quantity</th>
//       <th>total cost</th>
//       <th>Remove</th>
      
//     </tr>
//   </thead>
//   <tbody>
   
//    {this.props.cart.map((obj,index)=>{
//      return(
//        <tr>
        
//        <td><img  src= {obj.screenShot}/> </td> 
//          <td> {obj.pname} </td> 
//          <td> {obj.cost} </td>  
//          <td> {obj.category} </td> 
//          <td> <input type="number" id={index} onChange={this.handleChange} /> </td> 
//          <td> {this.state.netAmountArray[index]}</td> 
//          <td> <Button bsStyle="danger" id={obj._id} onClick={this.handleDelete.bind(this,index)}>  Delete </Button> </td> 
//        </tr> 
//      )
//    })}
  
//      <div style={{textAlign: 'center'}}>
//        <h3> Total Price </h3>
//        <h5> {totalPrice[(totalPrice.length)-1]} </h5>
//      </div>
  
//   </tbody>
// </Table>
//       </div>
                       
//     )
//   }
// }

// const mapStateToProps = (state) => {
//     return {
//         cart: state.posts.cart,
//         cartcounter: state.posts.cartcounter
//     }
// }


// export default connect(mapStateToProps,{removeFromCart})(Cart);





// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import {Table,Button} from 'react-bootstrap';
// import { removeFromCart } from '../actions/PostActions';
// import { number, func } from 'prop-types';
// import Slider3 from './slider3';



// class Cart extends Component {
// constructor(props){
//   super(props);

//   const array = props.cart.map(() => {
//     return 0;
//   });
// this.state ={
//   quantity: 1,
//   value: '',
//   netAmountArray: array,
//   cost: 0,
//   sum: 0
// }
// this.handleChange = this.handleChange.bind(this)
// }

//   componentDidMount(){
//     this.props.removeFromCart();
//     let cost=[];
//     let sum=0;
//     let costArray = this.props.cart.map((obj)=>{
//       parseInt(cost.push(obj.cost));
//     })
//     cost.forEach(function(obj){
//       sum += Number(obj)
//     })
//     console.log("cost",cost);
//     console.log("sum",sum);
//     this.setState({cost,sum})
//   }


//   handleChange(event){
//     const index = event.target.id;
//     console.log("myindex",event.target.value);
//     const netAmount = event.target.value*this.props.cart[index].cost;
//     const localArray = this.state.netAmountArray;
//     localArray[index] = netAmount;
//     this.setState({
//       netAmountArray: localArray
//     });
//     console.log(
//       index,netAmount,localArray,
//       this.state.netAmountArray)
//   }

//   handleDelete(index, event){
//   console.log("index deltetd",index);
//   let sum = this.state.sum-this.props.cart[index].cost;
//   this.setState({sum});
//   this.props.removeFromCart(event.target.id);
//   }
  




//   render() {
//     // var count = 0, temp = 0;
//     // const totalPrice = this.state.netAmountArray.map(elm=>(
//     //   temp+=elm
//     // ));
//     console.log("hello" ,this.props.cart)
//     return (
//       <div>
//         <Slider3/>
//         <h2 style={{textAlign: 'center'}}> Cart Component </h2> 
//         <Table responsive>
//   <thead>
//     <tr>
//     <th>image</th>
    
//       <th>Name</th>
//       <th>Cost</th>
//       <th>Category</th>
//       <th>quantity</th>
//       <th>total cost</th>
//       <th>Remove</th>
      
//     </tr>
//   </thead>
//   <tbody>
   
//    {this.props.cart.map((obj,index)=>{
//      return(
//        <tr>
        
//        <td><img  src= {obj.screenShot}/> </td> 
//          <td> {obj.pname} </td> 
//          <td> {obj.cost} </td>  
//          <td> {obj.category} </td> 
//          {/* <td> <input type="number" id={index} onChange={this.handleChange} /> </td>  */}
//           <td> {this.state.quantity} </td>
//          {/* <td> {this.state.netAmountArray[index]}</td>  */}
//           <td> {obj.cost*this.state.quantity} </td>
//          <td> <Button bsStyle="danger" id={obj._id} onClick={this.handleDelete.bind(this,index)}>  Delete </Button> </td> 
//        </tr> 
//      )
//    })}
  
//      <div style={{textAlign: 'center'}}>
//        <h3> Total Price </h3>
//        <h5> 
//          {this.state.sum}
//           </h5>
//      </div>
  
//   </tbody>
// </Table>
//       </div>
                       
//     )
//   }
// }

// const mapStateToProps = (state) => {
//     return {
//         cart: state.posts.cart,
//         cartcounter: state.posts.cartcounter
//     }
// }


// export default connect(mapStateToProps,{removeFromCart})(Cart);