"use strict"
let inboundApp = {
  "viewName" : "inboundApp",
  "label" : "入库单",
  "inboundInfo":{
    "label" : "入库单信息",
    "inlineDisplay" : true,
    "fields":{
      "inboundId":{
        "name":"inboundId",
        "label" : "入库单号",
        "type" : "text",
        "readonly" : true
      },

      "warehouseManager" : {
          "name":"inboundOperator",
          "label" : "仓库负责人",
          "type" : "text"
      },
      "inboundOperator" : {
          "name":"inboundOperator",
          "label" : "入库单操作人",
          "type" : "text"
      },
      "inboundDate" : {
        "name":"date",
        "label" : "入库日期",
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
    "label" : "入库计划计划信息",
    "fields":[{
        "name":"inboundId",
        "label" : "入库计划单号",
        "type" : "text"
      },{
        "name":"date",
        "label" : "入库日期",
        "type" : "date"
      },{
        "name":"ifChargeInboundFee",
        "label" : "是否收入库费",
        "type" : "boolean"
      },{
        "name":"scheduleOperator",
        "label" : "计划单操作人",
        "type" : "text"
      },{
        "name":"provider",
        "label" : "供应商",
        "type" : "text"
      },{
        "name":"requestNO",
        "label" : "客户单号",
        "type" : "text"
      }
    ]
  },
  "itemList" : {
    "showHeader" : true,
    "newItemTemplateAttr" : ["brand"],
    "newItemRow" : {
      "columns" : [{
            "name":"storageBinId",
            "label" : "库位号",
            "type" : "input_text",
        },{
            "name":"dot",
            "label" : "周期",
            "type" : "input_number"
        },{
            "name" : "actual",
            "label" : "数量",
            "type" : "input_number"
        },{
          "label" : "确定",
          "type" : "submit"
        }
      ]
    },
    "columns" : [{
          "name":"brand",
          "label" : "品牌",
          "type" : "text"
      },{
          "name":"storageBinId",
          "label" : "库位号",
          "type" : "text"
      },{
          "name":"dot",
          "label" : "周期",
          "type" : "text"
      },{
          "name":"amount",
          "label" : "计划数量",
          "type" : "text"
      },{
          "name" : "actual",
          "label" : "实际数量",
          "type" : "input_number"
      }
    ]
  },
  "item" : {
    "columns" : [{
          "name":"storageBinId",
          "label" : "库位号",
          "type" : "input_text"
      },{
          "name":"dot",
          "label" : "周期",
          "type" : "input_number"
      },{
          "name" : "actual",
          "label" : "数量",
          "type" : "input_number"
      },{
        "label" : "确定",
        "type" : "submit"
      }
    ]
  }
}
module.exports = inboundApp;
