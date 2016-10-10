"use strict"

let express = require ("express");
let mongoUtil = require("../util/mongoUtil");
let bodyParser = require("body-parser");

let jsonParser = bodyParser.json();
let objectRouter = express.Router();

objectRouter.get("/:objType",jsonParser,(req,res)=>{
  mongoUtil.getCollection(req.params.objType).find().toArray((err,doc) => {
    if(err){
      res.status("500").send("internal error");
    }
    res.json(doc);
  });
});

objectRouter.get("/:objType/:idField/:idValue",jsonParser,(req,res)=>{
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
    res.json({doc});
  });
});

objectRouter.post("/",jsonParser,(req,res) => {

  let reqBody = req.body;
  if(!reqBody || !reqBody.objType || !reqBody.data){
    res.status(400).send("Bad Request");
  }

  let result = mongoUtil.getCollection(reqBody.objType).insertOne(reqBody.data);
  res.json(result);
});

objectRouter.post("/update",jsonParser,(req,res) => {

  let reqBody = req.body;

  if(!reqBody || !reqBody.objType ||!reqBody.q){
    res.status(400).send("Bad Request");
  }

  let incData = reqBody.incData;
  let upData = reqBody.setData;

  let update = mongoUtil.getCollection(reqBody.objType).update(reqBody.q,
    {$inc : reqBody.incData,$set : reqBody.setData});

  res.json({});
});

module.exports = objectRouter;
