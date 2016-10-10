"use strict"

let express = require ("express");
let mongoUtil = require("../util/mongoUtil");
let bodyParser = require("body-parser");

let jsonParser = bodyParser.json();
let objectsRouter = express.Router();

objectsRouter.get("/:objType/:idField/:idValue",jsonParser,(req,res)=>{
  let objType = req.params.objType;
  let id = req.params.idValue;
  let idField = req.params.idField;
  if(!id || !idField ||!objType){
    res.status("400").send("bad request");
  }

  let q = new Map();
  q.set(idField,id);

  mongoUtil.getCollection(objType).find(q).toArray((err,doc)=>{
    if(err){
      console.log(err);
    }
    res.json(doc);
  });
});

module.exports = objectsRouter;
