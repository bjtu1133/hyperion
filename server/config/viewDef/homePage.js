"use strict"

let homePage = {
  "viewName" : "homePage",
  "sections" : {
    "inboundPane":{
      "name":"inboundSchedule",
      "label" : "入库计划",
      "target" : "hyperion.inboundApp",
      "fields":{
        "inboundId":{
          "name":"inboundId",
          "label" : "入库计划单号",
          "type" : "text",
        }
      }
    },
    "storageBinListPane":{
      "label" : "库位列表",
      "fields":{
        "inboundId":{
          "name":"inboundId",
          "label" : "入库计划单号",
          "type" : "text",
        }
      }
    }
  }
}

module.exports = homePage;
