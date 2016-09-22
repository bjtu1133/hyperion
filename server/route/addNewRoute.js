"use strict"

let express = require ("express");
let mongoUtil = require("../util/mongoUtil");
let bodyParser = require("body-parser");

let jsonParser = bodyParser.json();
let addNewRoute = express.Router();

/*
* This service is designed to check if the object user trying to create already exist
*
* Example input
* objType : Brand
* idField : brandName
* id : Goodyear
* Example output
* {"_id":"57ce3341cc5822a031dea792",
*  "brandName":"Goodyear",
*  "nickName":"固特异",
*  "description":"一个来自美国的轮胎品牌"}
* OR
* null
*/
addNewRoute.get("/:objType/:idField/:idValue",jsonParser,(req,res)=>{
  let objType = req.params.objType;
  let id = req.params.idValue;
  let idField = req.params.idField;
  if(!id || !idField ||!objType){
    res.status("400").send("bad request");
  }

  let q = new Map();
  q.set(idField,id);

  mongoUtil.getCollection(objType).find(q).limit(1).next((err,doc)=>{
    if(err){
      console.log(err);
    }
    console.log(doc);
    res.json({doc});
  });
});
/*
* Valid Request Body should be an object like
* {
*   "objType" : "Brand",
*   "data" : {
*     brandName : "Goodyear",
*     ......
*   }
* }
*/
addNewRoute.post("/",jsonParser,(req,res) => {
  console.log("insert");
  let reqBody = req.body;
  if(!reqBody || !reqBody.objType || !reqBody.data){
    res.status(400).send("Bad Request");
  }
  console.log(reqBody);
  let result = mongoUtil.getCollection(reqBody.objType).insertOne(reqBody.data);
  res.json(result);
});

module.exports = addNewRoute;
