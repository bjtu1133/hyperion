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

inboundRoute.post("/create",jsonParser,(req,res)=>{
  let reqBody = req.body;
  routeUtil.checkParameters(reqBody);

  let inbound = reqBody;

  let scheduleCol = mongoUtil.getCollection("Schedule");

  mongoUtil.getCollection("Inbound").save(inbound,(err,doc)=>{
    //Close previous schedule
    scheduleCol.update({"inboundId":inbound.scheduleId},{$set:{"status":"close"}})
    res.json(doc);
  });
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
