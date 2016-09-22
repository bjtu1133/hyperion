"use strict"

let serverUtil = require("./util/serverUtil");
let mongoUtil = require("./util/mongoUtil");

mongoUtil.connect();
let app = serverUtil.createHyperionServer();

app.listen(8181, () => console.log("Listen on 8181"));
