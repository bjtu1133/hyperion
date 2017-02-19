"use strict"

let express = require ("express");
let mongoUtil = require("../util/mongoUtil");
let bodyParser = require("body-parser");
let routeUtil = require("./routeUtil");
let jsonParser = bodyParser.json();

let inboundRoute = express.Router();

inboundRoute.get("/schedule",(req,res)=>{
  routeUtil.checkParameters();
  res.json("abx");
});

inboundRoute.post("/schedule/create",jsonParser,(req,res)=>{
  let reqBody = req.body;
  routeUtil.checkParameters(reqBody);

  let schedule = reqBody;
  mongoUtil.getCollection("Schedule").save(schedule,(err,doc)=>{
    res.json(doc);
  });
});


module.exports = inboundRoute;
