"use strict"

let express = require ("express");
let mongoUtil = require("../util/mongoUtil");
//let inboundUtil = require("../util/inboundUtil");
let bodyParser = require("body-parser");
let routeUtil = require("./routeUtil");

let jsonParser = bodyParser.json();

let outboundRoute = express.Router();


outboundRoute.post("/schedule/create",jsonParser,(req,res)=>{
  let reqBody = req.body;
  routeUtil.checkParameters(reqBody);

  let schedule = reqBody;

  schedule.status = "open";

  mongoUtil.getCollection("OutboundSchedule").save(schedule,(err,doc)=>{
    res.json(doc);
  });
});


module.exports = outboundRoute;
