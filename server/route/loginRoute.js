"use strict"

let express = require ("express");
let mongoUtil = require("../util/mongoUtil");
let bodyParser = require("body-parser");

let jsonParser = bodyParser.json();
let loginRoute = express.Router();

loginRoute.post("/",jsonParser,(req,res) => {

  let loginData = req.body;

  let q = {};

  if(loginData.userName)
    q.userName = loginData.userName;
  else if(loginData.userEmail)
    q.userEmail = loginData.userEmail;
  else {
    res.status("400").send("bad request");
  }

  if(loginData.userPSW)
    q.userPSW = loginData.userPSW;
  else
    res.status("400").send("bad request");

  mongoUtil.getCollection("User").find(q).toArray((err,doc)=>{
    if(err){
        res.json(err);
    }else{
        if(doc.length<=0){
          res.json({"message":"user not found"});
        }else{
          req.session.userInfo = doc[0];
          delete req.session.userInfo.userPSW;
          res.json({"message":"login Sucess"});
        }
    }
  });
});

module.exports = loginRoute;
