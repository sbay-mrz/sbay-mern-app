const express = require('express');
const app = express();
const registerCustomer = require('./api/routes/customerRegistrations');
const registerSeller = require('./api/routes/sellerRegistrations');
const productRoutes = require('./api/routes/products');
const CustomerBuyRequest = require('./api/routes/customerBuyRequests');
const CustomerNewRequest = require('./api/routes/customerNewRequest');
const CustomerBugRequest = require('./api/routes/customerBugRequest');
const CustomerCustomizationRequest = require('./api/routes/customerCustomization');
const ForgotPassword = require('./api/routes/ForgotPassword');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodoverride = require('method-override');
//const multer = require('multer');
//const upload = multer({ dest : '/uploads/'});
const cors = require('cors');
const path = require("path");
// const stripe = require('stripe')('sk_test_qjSaCAS58mdBZAtgrPVXJoSV00W3kVOXiQ');



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sbay' ,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

// let gfs;
// conn.once('open',() => {
// gfs = Grid(conn.db,mongoose.mongo);
// gfs.collection('uploads');
// })


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());
app.use(allowCrossDomain);

app.use(cors({
    methods: ['GET','POST','PUT','PATCH','DELETE'],
    credentials: true, origin: true,
}))
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();

    // res.header("Access-Control-Allow-Origin","*");
    // res.header(
        
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, Content-Type, Accept , Authorization"  
    // );
    // if(req.method === "OPTIONS"){
    //     res.header('Access-Control-Allow-Methods',"GET,PUT,POST,PATCH,DELETE");
    //     return res.status(200).json({});
    // }
    // next();
})
    


//app.use(express.static('uploads'));
// app.use(methodoverride,'_method');

//routes
app.use("/customers", registerCustomer);
app.use("/buyRequest", CustomerBuyRequest);
app.use("/newRequest", CustomerNewRequest);
app.use("/customRequest",CustomerCustomizationRequest);
app.use("/bugRequest", CustomerBugRequest);
app.use("/sellers",   registerSeller );
app.use("/products",productRoutes);
// app.use("/forgot",ForgotPassword);



// Routes which should handle requests


// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
//   }));

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// ...


app.use((req,res,next)=> {
  const error = new Error('Not Found');
  error.status = 404;
  next(error)
})


app.use((error,req,res,next)=> {
    res.status(error.status || 7000);
    res.json({
        error: {
        message: error.message
        }
    })
})

// Right before your app.listen(), add this:
// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
module.exports = app;


