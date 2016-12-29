"use strict"
let express = require("express");
let addNewRoute = require("../route/addNewRoute");
let objectRoute = require("../route/objectRoute");
let loginRoute = require("../route/loginRoute");
let authRoute = require("../route/authRoute");
let viewRoute = require("../route/viewRoute");
let sessionUtil = require("./sessionUtil");

let serverUtil = {

  createHyperionServer (){
    let app = express();
    app.set("trust proxy",1);
    app.use(sessionUtil.getSession());
    app.use( express.static(__dirname + "/../../client" ));
    app.use("/addNew" , addNewRoute);
    app.use("/object" , objectRoute);
    app.use("/login",loginRoute);
    app.use("/auth",authRoute);
    app.use("/view",viewRoute);
    return app;
  }

}

module.exports = serverUtil;
