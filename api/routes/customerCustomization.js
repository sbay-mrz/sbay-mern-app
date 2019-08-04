const express = require('express');
const router = express.Router();
const customerCustomizationRequest = require('../models/customerCustomizationRequest');
const invoiceNum  = require('uuid/v1');
const Product = require('../models/product');
const fetch = require("node-fetch");


router.post('/postcustom',(req,res,next)=>{
    let userObject = {
        cusCuzReqId: req.body.cusCuzReqId,
        cuzDescription: req.body.cuzDescription,
        productId:req.body.productId
       // invoice_No: invoiceNum()
    }
    customerCustomizationRequest.create(userObject).then(function (user) {
        
         console.log(user);
         res.send(user)
    }).catch(next)
})


router.get('/getcustom/:myid',(req,res,next)=>{
  
  customerCustomizationRequest.find({}, function (err,products) {
     var i=0;
      var productMap = [];
      var pro = {
                  cuzDescription : "", 
                  productName : "",
                  productCategory : ""
                }
      
      products.forEach( function (request) { 
          if( request.cusCuzReqId.equals(req.params.myid)){
            // fetch(`http://localhost:7000/products/${request.productId}`)
             Product.findById(request.productId)
            // .then(res => res.json()) 
            // .then(function(data){
            //   // pro.cuzDescription = request.cuzDescription, 
            //   // pro.productName = data.pname,
            //   // pro.productCategory = data.category
            //   var pro = {
            //     cuzDescription : request.cuzDescription, 
            //     productName : data.pname,
            //     productCategory : data.category
            //   }
            //   productMap[i++] = pro;
              
            // })    

           .then(docs =>{
            var pro = {
                        cuzDescription : request.cuzDescription, 
                        productName : docs.pname,
                        productCategory : docs.category
                      }
                return pro;      
              }).then(out => {
                productMap[i++] = out;
                // return productMap;
              })
              
      //         console.log("hello baby",productMap)
          
            }
      //       //console.log("hello honey",productMap)
          })

      //console.log(productMap);
      setTimeout(function(){
        res.send(productMap)
      },5000);
     
  })
  .catch(err => next(err));
})

router.get('/:id',(req,res,next)=>{

    customerCustomizationRequest.findById(req.params.id)
    .then( docs => {
        if(!docs){ return res.status(404).end()}
        return res.status(200).json(docs)
    })
    .catch(err => next(err));
})


router.patch('/:productid',(req,res,next)=>{
  res.status(200).json({
    message: "updated json"
  })
});

router.delete('/:productid',(req,res,next)=>{
    res.status(200).json({
      message: "delted json"
    })
  });


module.exports = router;
