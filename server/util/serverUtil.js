"use strict"
let express = require("express");
let addNewRoute = require("../route/addNewRoute");
let path = require("path");

let serverUtil = {

  createHyperionServer (){
    let app = express();
    
    app.use( express.static(__dirname + "/../../client" ));
    app.use("/addNew" , addNewRoute);


    return app;
  }

}

module.exports = serverUtil;
