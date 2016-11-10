"use strict"

let express = require ("express");
let mongoUtil = require("../util/mongoUtil");
let bodyParser = require("body-parser");
let sessionUtil = require("../util/sessionUtil");

let jsonParser = bodyParser.json();
let authRoute = express.Router();

authRoute.post("/",jsonParser,(req,res) => {
  res.json(sessionUtil.authUserInfo(req));
});

authRoute.post("/logoff",jsonParser,(req,res)=>{
  req.session.destroy(()=>{
    res.json({"logoff":"successful"});
  });  
})

module.exports = authRoute;
