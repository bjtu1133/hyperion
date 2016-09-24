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
    res.json({doc});
  });
});

module.exports = objectRouter;
