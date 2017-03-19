"use strict"

let homePage = {
  "viewName" : "homePage",
  "section1" : {

    "newInboudSchedule":{
      "name":"newInboudSchedule",
      "label" : "填写入库计划单",
      "type" : "inputPanel",
      "target" : "hyperion.inboundScheduleApp",
      "fields":{
        "requestNO":{
          "name":"requestNO",
          "label" : "客户单号",
          "type" : "text",
        }
      }
    },
    "newInbound":{
      "name":"newInbound",
      "label" : "填写入库单",
      "type" : "inputPanel",
      "target" : "hyperion.inboundApp",
      "fields":{
        "inboundId":{
          "name":"inboundId",
          "label" : "入库计划单号",
          "type" : "text",
        }
      }
    },
    "newOutboundSchedule":{
      "name" : "newOutboundSchedule",
      "label" : "填写出库计划单",
      "type" : "inputPanel",
      "target" : "hyperion.inboundApp",
      "fields":{
        "inboundId":{
          "name":"inboundId",
          "label" : "客户单号",
          "type" : "text",
        }
      }
    },
    "newOutbound":{
      "name":"newOutbound",
      "label" : "填写出库单",
      "type" : "inputPanel",
      "target" : "hyperion.inboundApp",
      "fields":{
        "outboundScheduleId":{
          "name":"outboundScheduleId",
          "label" : "出库计划单号",
          "type" : "text",
        }
      }
    }
  },
  "section2": {
    "activeInboundSchedulePane":{
      "label" : "待完成的入库计划",
      "type" : "filterListPanel",
      "objType" : "Schedule",
      //If the item in filterList Panel is clickable, identify target
      "target" : "hyperion.inboundApp",
      "targetCfg" : {
        //The string key associate with the object going to pass to the object
        "targetKey" : "inboundId",
        //The string key from item (same object with displayConfig)
        "itemKey" : "inboundId"
      },
      //query for loading itemList
      "onLoadQuery" : {
        "objectType" : "Schedlue",
        "status" : "open"
      },
      "displayConfig":{
        "title":["inboundId","provider"],
        "body" :["requestNO","scheduleOperator","date","status"]
      }
    },
    "activeOutboundSchedulePane":{
      "label" : "待完成的出库计划",
      "type" : "filterListPanel",
      "objType" : "OutboundSchedule",
      //If the item in filterList Panel is clickable, identify target
      "target" : "hyperion.outboundApp",
      "targetCfg" : {
        //The string key associate with the object going to pass to the object
        "targetKey" : "outboundId",
        //The string key from item (same object with displayConfig)
        "itemKey" : "outboundId"
      },
      //query for loading itemList
      "onLoadQuery" : {
        "objectType" : "OutboundSchedlue",
        "status" : "open"
      },
      "displayConfig":{
        "title":["outboundId","provider"],
        "body" :["requestNO","driver","distributor","date","status"]
      }
    }
  }
}

module.exports = homePage;
