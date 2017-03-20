"use strict"
let outboundApp = {
  "viewName" : "inboundApp",
  "label" : "出库单",
  "outboundInfo":{
    "label" : "出库单信息",
    "inlineDisplay" : true,
    "fields":{
      "outboundId":{
        "name":"inboundId",
        "label" : "出库单号",
        "type" : "text",
        "readonly" : true
      },

      "warehouseManager" : {
          "name":"warehouseManager",
          "label" : "仓库负责人",
          "type" : "text"
      },
      "outboundOperator" : {
          "name":"outboundOperator",
          "label" : "出库单操作人",
          "type" : "text"
      },
      "outboundDate" : {
        "name":"date",
        "label" : "出库日期",
        "type" : "date"
      }
    }
  },
  "comment" : {
    "fields":{
      "comment":{
        "name":"comment",
        "label" : "注释",
        "type" : "textarea"
      }
    }
  },
  "scheduleInfo":{
    "label" : "出库计划信息",
    "fields":[{
      "name":"outboundId",
      "label" : "出库计划单号",
      "type" : "text"
    },
    {
      "name":"date",
      "label" : "出库日期",
      "type" : "date"
    },
    {
      "name":"scheduleOperator",
      "label" : "计划单操作人",
      "type" : "text",
    },
    {
      "name":"warehouseManager",
      "label" : "仓库管理员",
      "type" : "text",
    },
    {
      "name":"driver",
      "label" : "司机",
      "type" : "text",
    },
    {
      "name":"distributor",
      "label" : "经销商",
      "type" : "text",
    },
    {
      "name":"requestNO",
      "label" : "客户单号",
      "type" : "text",
    }]
  },
  "itemList" : {
    "label":"详细出库计划",
    "showHeader" : true,
    "addNewButtonEnable" : false,
    "columns" : [
      {
        "name" : "storageId",
        "label" : "库存ID",
        "type" : "text"
      },
      {
          "name":"dot",
          "label" : "周期",
          "type" : "text"
      },{
          "name":"amount",
          "label" : "库存数量",
          "type" : "text"
      },{
          "name" : "schedule",
          "label" : "计划出库数量",
          "type" : "text"
      },{
          "name":"actual",
          "label" : "实际出库数量",
          "type" : "input_number"
      }
    ]
  },
  "leftOver" : {
    "label":"余货记录",
    "showHeader" : true,
    "addNewButtonEnable" : true,
    "newItemRow" : {
      "columns" : [{
          "name":"itemCode",
          "label" : "轮胎代码",
            "type" : "input_text",
        },{
          "name":"storageBin",
          "label" : "库位号",
            "type" : "input_text"
        },{
            "name":"dot",
            "label" : "周期",
            "type" : "input_number"
        },{
            "name" : "amount",
            "label" : "数量",
            "type" : "input_number"
        },{
          "label" : "确定",
          "type" : "submit"
        }
      ]
    },
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
          "name" : "amount",
          "label" : "数量",
          "type" : "text"
      }
    ]
  }
}
module.exports = outboundApp;
