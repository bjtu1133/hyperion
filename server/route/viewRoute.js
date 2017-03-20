"use strict"

let express = require ("express");

let viewRoute = express.Router();

viewRoute.get('/getViewDef/:viewName',(req,res)=>{
  let viewName = req.params.viewName;
  let errors = [];
  let viewDef = {};

  try{
    viewDef = require("../config/viewDef/"+viewName);
    //console.log(viewDef);
  }catch(err){
    errors.push(err);
  }
  if(errors.length >0){
    res.json(errors);
  }else{
    res.json(viewDef);
  }
});

module.exports = viewRoute;
