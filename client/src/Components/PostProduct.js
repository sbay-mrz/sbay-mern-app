import React  ,{Component} from 'react';
import {Form,FormControl,FormGroup,ControlLabel,Grid,Row,Col,Button} from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Slider3 from './slider3';

 class PostProduct extends Component{
   constructor(){
     super();
     this.state = {
        seller_id:'',
        pname: '',
        category: '',
        pdescription: '',
        demovideourl: '',
        exeUrl: '',
        hostUrl: '',
        cost: '',
        screenShot: [],
        val: ''
     }
     this.postProduct = this.postProduct.bind(this);
   }


 
    
 
   postProduct(e){



     e.preventDefault();
      console.log("success",e);
      let userObject = {
        seller_id: this.props.match.params.proid,
        pname: this.state.pname,
        pdescription: this.state.pdescription,
        screenShot: this.state.screenShot,
        exeUrl: this.state.exeUrl,
        demoVideoUrl: this.state.demoVideoUrl,
        hostUrl: this.state.hostUrl,
        cost: this.state.cost,
        category: this.state.category,
      }
      var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      var regex = new RegExp(expression);
    
      if(!userObject.exeUrl.match(regex) || !userObject.demoVideoUrl.match(regex) || !userObject.hostUrl.match(regex)){
        alert('Please use a valid URL , Url must contain https:// or http://');
        return false;
      }
    else 
      axios.post('https://sbay-mrz.herokuapp.com/products/postproduct',userObject)
      .then(res => {
        console.log("posted product",res.data);
      });

      if(this.state.pname === "" && this.state.screenShot === "" && this.state.pdescription === ""  && this.state.exeUrl === "" && this.state.demovideourl === "" && this.state.hostUrl === "" && this.state.cost === "" && this.state.category === ""){
          alert('fields missing')
      }
      else{
      this.props.history.push('/');
      }
      
   }


   getName(e){
     this.setState({pname: e.target.value});
   }

   getDescription(e){
     this.setState({pdescription: e.target.value});
   }

   
   getCost(e){
    this.setState({cost: e.target.value});
  }

  getDemoVideoUrl(e){
    this.setState({demoVideoUrl: e.target.value});
  }

  
  getExeUrl(e){

    this.setState({exeUrl: e.target.value});
  }

  getHostUrl(e){
    this.setState({hostUrl: e.target.value});
  }

  getCategory(e){
    console.log(e.target.value);
    this.setState({category: e.target.value});
  }

 getScreenShot(event){

  var CLOUDINARY_URL ="	https://api.cloudinary.com/v1_1/djza2z6yc/upload";
  var CLOUDINARY_UPLOAD_PRESET="jrzq3ejg";

var file = event.target.files[0];
var formData = new FormData();
formData.append('file',file);
formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);


axios({
url: CLOUDINARY_URL,
method: 'POST',
data: formData
}).then(res => {
console.log("my response",res);
this.setState({ screenShot: res.data.secure_url})
}).catch(function(err){
console.log(err)
})

// cloudinary.openUploadWidget(
//   { cloud_name: 'chohan', upload_preset: 'bhorijjp', tags: ['uploads'] },
//   function(error, result) {
//     console.log("chuchu cloudinary",result);
//   }
// ,'_self');
// let options = {
//   cloud_name: "demo",
//   upload_preset: "a5vxnzbp",
//   multiple: true,
//   returnJustUrl: true
// };

// ReactCloudinaryUploader.open(options,"_self").then(image=>{
//   if (this.props.returnJustUrl)
//       image = image.url;
//   console.log("image",image);
// }).catch(err=>{
//   console.error(err);
// });

// window.cloudinary.openUploadWidget(
//   { cloud_name: 'minetoo', upload_preset: 'mine', tags: ['xmas'] },
//   function(error, result) {
//     console.log(result);
//   }
// ,'_self');
// }


// var myWidget = window.cloudinary.createUploadWidget({
//   cloudName: 'chohan', 
//   uploadPreset: 'bhorijjp'}, (error, result) => { 
//     if (!error && result && result.event === "success") { 
//       console.log('Done! Here is the image info: ', result.info); 
//     }
//   }
// )
// myWidget.open("", "_blank");
 

}

getPic(){
  
  window.cloudinary.openUploadWidget(
  { cloud_name: 'chohan', upload_preset: 'bhorijjp', tags: ['uploads'] },
  function(error, result) {
    console.log("chuchu cloudinary",result.info.secure_url);
    this.setState({screenShot: result.info.secure_url})
  }.bind(this));
}

 
    render(){
        return(
            <div>
              <Slider3/>
                <Card className="post-product">
                <h2> Post Your Product </h2>
              <form method="post" onSubmit={this.postProduct} className="formInPostProduct">
  <div class="form-group">
    <label for="name" className="one">Product Name:</label>
    <input type="name" class="form-control" id="name" onChange={this.getName.bind(this)} required/>
  </div>
 
  <div class="form-group">
    <label for="exeUrl"  className="one">Exe Url:</label>
    <input type="text" class="form-control" id="exeUrl" onChange={this.getExeUrl.bind(this)} required/>
  </div>
  <div class="form-group">
    <label for="demovideourl"  className="one">Demo Video Url:</label>
    <input type="text" class="form-control" id="demovideourl" onChange={this.getDemoVideoUrl.bind(this)} required/>
  </div>
  <div class="form-group">
    <label for="hostUrl"  className="one">Host Url:</label>
    <input type="text" class="form-control" id="hostUrl" onChange={this.getHostUrl.bind(this)} required/>
  </div>
  <div class="form-group">
    <label for="cost"  className="one">Cost:</label>
    <input type="number" class="form-control" id="cost" onChange={this.getCost.bind(this)} required/>
  </div>
{/*
  <div class="form-group">
    <label for="pdescription"  className="one">Product Description:</label>
    <input type="text" class="form-control" id="pdescription"onChange={this.getDescription.bind(this)}/>
  </div>
  */}
  <div class="form-group">
    <label for="pdescription"  className="one">Product Description:</label>
    <textarea class="form-control" id="pdescription" rows="3" onChange={this.getDescription.bind(this)} required></textarea>
  </div>
  <div class="form-group">
    <label for="screenShot"  className="one">ScreenShot:</label>
    <input type="file" class="form-control"  onChange={this.getScreenShot.bind(this)} required/>

    {/* <Button onClick={this.getPic.bind(this)}> get pic  </Button> */}
  </div>
  <div class="form-group cate" >
    <label for="category" className="one">category:</label> <br/>
    <select  class="form-control"  onChange={this.getCategory.bind(this)} required> 
    <option value=""> Select a Category </option>
        <option value="Web App"> web app </option>
        <option value="Android App"> Android App </option>
        <option value="Ios App"> Ios App </option>
        <option value="Android/Ios App"> Android/Ios App </option>
        <option value="VR"> VR </option>
        <option value="AR"> AR </option>
        <option value="AI"> AI </option>
        <option value="Ecommerce"> Ecommerce </option>
        <option value="IOT"> IOT </option>
        </select>
  </div>
  {/*
  <div class="checkbox form-group">
    <label><input type="checkbox"/> Remember me</label>
  </div>
*/}
{this.state.screenShot!= '' && <button type="submit" class="btn btn-primary ">Submit</button>}
</form>
</Card>
                 </div>
        )
    }
}

export default PostProduct;