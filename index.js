const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
 var bodyparser = require("body-parser");
 const morgan = require("morgan");
 const dotenv = require("dotenv");
 const db = require("./config");
 const route = require("./routes/index");



 
app.use(express.json());

//  const productRouter = require("./routes/product");


// const productRouter = require("./routes/product");
// const brandRouter = require("./routes/brand");


 dotenv.config();
 //connect DataBase
 db.connect();


 app.use(bodyparser.json({limit:"50mb"}));
 app.use(cors());
 app.use(morgan("common"));

// route init
route(app);

app.get('/', (req, res) => {
  res.send('Hello Server');
});
// app.use("/",productRouter);
///
 app.listen(8000,()=>{
  console.log("Sever is running......");
 });




