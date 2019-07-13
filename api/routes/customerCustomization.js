const express = require('express');
const router = express.Router();
const customerCustomizationRequest = require('../models/customerCustomizationRequest');
const invoiceNum  = require('uuid/v1');

router.post('/postcustom',(req,res,next)=>{
    let userObject = {
        cusCuzReqId: req.body.cusCuzReqId,
        cuzDescription: req.body.cuzDescription,
        productId:req.body.productId
        // invoice_No: invoiceNum()
    }
    customerCustomizationRequest.create(userObject).then(function (user) {
        
         console.log(user);
        //  userObject.add(user._id);
        //  console.log(userObject)
         res.send(user)
    }).catch(next)
})


router.get('/getcustom/:myid',(req,res,next)=>{
  let i=0;
  customerCustomizationRequest.find({}, function (err,products) {
      var productMap = [];
      products.forEach( function (request) { 
          if( request.cusCuzReqId.equals(req.params.myid)){
              productMap[i++] = request
          }
      });
      console.log(productMap);
      res.send(productMap);
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
