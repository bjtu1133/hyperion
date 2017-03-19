"use strict"
let outboundScheduleApp = {
  "viewName" : "outboundScheduleApp",
  "label" : "出库计划单",
  "components" : {
    "generalInfo":{
      "name":"generalInfo",
      "label" : "基本信息",
      "inlineDisplay" : true,
      "fields":{
        "outboundId":{
          "name":"outboundId",
          "label" : "出库计划单号",
          "type" : "text",
          "readonly" : true
        },
        "date":{
          "name":"date",
          "label" : "出库日期",
          "type" : "date"
        },
        "scheduleOperator":{
          "name":"scheduleOperator",
          "label" : "计划单操作人",
          "type" : "text",
        },
        "warehouseManager":{
          "name":"warehouseManager",
          "label" : "仓库管理员",
          "type" : "text",
        },
        "driver":{
          "name":"driver",
          "label" : "司机",
          "type" : "text",
        },
        "distributor":{
          "name":"distributor",
          "label" : "经销商",
          "type" : "text",
        },
        "requestNO":{
          "name":"requestNO",
          "label" : "客户单号",
          "type" : "text",
        }
      }
    },
    "storagePicker":{
      "label" : "选择库存",
      "filter":{
        "name":"filter",
        "label" : "选择器",
        "objType" : "Storage",
        "fields":{
          "itemCode":{
            "name":"itemCode",
            "label" : "轮胎代码",
            "type" : "text"
          }
        }
      },
      "options":{
        "name":"options",
        "assocObjectType" : "Storage",
        "idField" : "storageId",
        "optionConfig":{
          "title":["storageId"],
          "body" :["itemCode","dot","storageBin","amount"]
        }
      }
    },
    "outboundSchedule" : {
      "label":"详细出库计划",
      "showHeader" : true,
      "addNewButtonEnable" : false,
      "columns" : [{
            "name":"itemCode",
            "label" : "轮胎代码",
            "type" : "text"
        },{
            "name":"storageBin",
            "label" : "库位号",
            "type" : "text"
        },{
            "name":"dot",
            "label" : "周期",
            "type" : "text"
        },{
            "name":"amount",
            "label" : "库存数量",
            "type" : "text"
        },{
            "name" : "actual",
            "label" : "出库数量",
            "type" : "input_number"
        }
      ]
    }
  }
}
module.exports = outboundScheduleApp;
