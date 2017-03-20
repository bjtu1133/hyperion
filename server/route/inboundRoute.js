"use strict"

let express = require ("express");
let mongoUtil = require("../util/mongoUtil");
let inboundUtil = require("../util/inboundUtil");
let bodyParser = require("body-parser");
let routeUtil = require("./routeUtil");

let jsonParser = bodyParser.json();

let inboundRoute = express.Router();

inboundRoute.get("/schedule",(req,res)=>{
  routeUtil.checkParameters();
  res.json("abx");
});

inboundRoute.post("/create",jsonParser,(req,res)=>{
  let reqBody = req.body;
  routeUtil.checkParameters(reqBody);

  let inbound = reqBody;

  //let inboundItems = inbound.inboundItems;
  inboundUtil.createInbound(inbound,(doc)=>{
    res.json(doc);
  })

  //let storageCol = mongoUtil.getCollection("Storage");
});


inboundRoute.post("/schedule/create",jsonParser,(req,res)=>{
  let reqBody = req.body;
  routeUtil.checkParameters(reqBody);

  let schedule = reqBody;

  schedule.status = "open";

  mongoUtil.getCollection("Schedule").save(schedule,(err,doc)=>{
    res.json(doc);
  });
});


module.exports = inboundRoute;
