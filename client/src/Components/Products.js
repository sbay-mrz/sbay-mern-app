import React, { Component } from 'react'
import {Card,CardActionArea,CardContent,Button} from '@material-ui/core'
import product from '../../src/assets/product.jpg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchproducts,addToCart } from '../actions/PostActions';
import TextField from '@material-ui/core/TextField';

 class Products extends Component {
  

       constructor(){
        super();
        this.state = {
            

            search: '',
            mysearches: false,
            filteredItmes: []
        }
     
    }


    componentDidMount(){
      this.props.fetchproducts();
  }


  //before redux
  // componentDidMount(){

  //   axios.get(`http://localhost:7000/products/getproducts`)
  //   .then(res => {
  //     const products = res.data;
  //     console.log(products);
  //     this.setState({ products });
  //   })
  // }


  //before redux
//   getDescription(obj,id){
//     console.log(obj);
//     console.log(id);
//  let pd = this.state.productDescription;
//   pd.push(obj);
//    this.setState({ productDescription: pd})
//   }



// from redux store
addCart(obj, _id){
  let {addedIds, addToCart} = this.props;
   if(addedIds.includes(_id)){
       alert('already exist')
   }else addToCart(obj, _id)
}
searchData(e){
      
  this.setState({ search: e.target.value,mysearches: true})
  console.log(this.state.search);
  let filteredItmes=[];
  this.props.products.filter( obj =>{
    if(obj.pname.toLowerCase().includes(e.target.value.toLowerCase())){
      filteredItmes.push(obj);
      this.setState({
        filteredItmes,
        //  mysearches: !this.state.mysearches
      })
      console.log("filter done",filteredItmes)
    }
  })

}

  // addToCart(obj){
  //   console.log(obj);
  //   let arr = [];
  //   arr.push(obj);
  //   this.setState({ cart: [...this.state.cart,arr]})
  //   console.log(this.state.cart);
  // }
    render() {
    console.log(this.props.products)
        return (


//           <div> 


 
//           {this.props.products.map((obj)=>{
//             return(
//               <div className="main-column">
//               <div>
//               <img class="card-img-top" src="" alt="Cardcap"/>
//               <div class="card-body" className="mid-col">
//               {obj.pname}
//               </div>

// <div className="sidebar-one">
// 1
//   </div> 


// <div className="sidebar-two">
// 2
//   </div> 


// <div className="sidebar-three">
// 3
//   </div> 

//               <a href="works" class="btn btn-primary">Go somewhere</a>
//               </div>
//               </div>
//             )
//           })}
  

//           </div>

    <section>
    <div className="card-heading"><h1> Ready To Sell Products</h1></div>
    <div className="text-field">
  
    <TextField
          id="filled-search"
          label="search our products"
          type="search"
          variant="outlined"
          onChange={this.searchData.bind(this)}
        />    
        </div>
    {!this.state.mysearches  &&
    <div  className="cardAllign" id="products">
    {
this.props.products === undefined ? 
<i class="fas fa-spinner fa-spin fa-4x"></i> : 
this.props.products.map((obj)=>{
return(
<div key={obj._id}>

<Card className="card-style">
<img src={obj.screenShot} alt="profile" width="100%" height="150"/>

<CardActionArea>
<CardContent>
  <div>
<p className="productFontsize">   {obj.pname} </p>


<div className="card-button-style">
<Button variant="contained" color="primary" onClick={()=> this.addCart(obj,obj._id)}> <span className="icons-size-cart"><i class="fas fa-cart-plus"></i></span> </Button> 

<Link to={`/productDescription/${obj._id}`} className="product-des">  Description </Link>
</div>
</div>
</CardContent>
</CardActionArea>
</Card>

</div> 
)      
})}  
</div>
    }

    {this.state.mysearches  &&
      <div  className="cardAllign" id="products">
      {
  this.props.products === undefined ? 
  <i class="fas fa-spinner fa-spin fa-4x"></i> : 
  this.state.filteredItmes.map((obj)=>{
  return(
  <div key={obj._id}>
  
  <Card className="card-style">
  <CardActionArea>
  <CardContent>
    <div>
    <img src={obj.screenShot} alt="profile" width="100%" height="150"/>
  <p className="productFontsize">   {obj.pname} </p>
  
  
  <div className="card-button-style">
  <Button variant="contained" color="primary" onClick={()=> this.addCart(obj,obj._id)}> <span className="icons-size-cart"><i class="fas fa-cart-plus"></i></span> </Button> 
  
  <Link to={`/productDescription/${obj._id}`}>  Description </Link>
  </div>
  </div>
  </CardContent>
  </CardActionArea>
  </Card>
  
  </div> 
  )      
  })}  
  </div>
      }
    </section>
    )
  }
}



const mapStateToProps = (state,dispatch) => ({
  products: state.posts.items,
  cart: state.posts.cart,
  addedIds: state.posts.addedIds,
})

export default connect(mapStateToProps, {fetchproducts,addToCart})(Products);
