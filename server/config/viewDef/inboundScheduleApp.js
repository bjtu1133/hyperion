"use strict"
let inboundScheduleApp = {
  "viewName" : "inboundScheduleApp",
  "components" : {
    "generalInfo":{
      "name":"generalInfo",
      "label" : "基本信息",
      "inlineDisplay" : true,
      "fields":{
        "inboundId":{
          "name":"inboundId",
          "label" : "入库计划单号",
          "type" : "text",
          "readonly" : true
        },
        "date":{
          "name":"date",
          "label" : "入库日期",
          "type" : "date"
        },
        "ifChargeInboundFee":{
          "name":"ifChargeInboundFee",
          "label" : "是否收入库费",
          "type" : "boolean",
        },
        "scheduleOperator":{
          "name":"scheduleOperator",
          "label" : "操作人",
          "type" : "text",
        },
        "provider":{
          "name":"provider",
          "label" : "供应商",
          "type" : "text",
        },
        "requestNO":{
          "name":"requestNO",
          "label" : "客户单号",
          "type" : "text",
        }
      }
    },
    "itemPicker":{
      "type" : "itemPicker",
      "label" : "选择轮胎",
      "filter":{
        "name":"filter",
        "label" : "选择器",
        "objType" : "Tire",
        "fields":{
          "itemCode":{
            "name":"itemCode",
            "label" : "轮胎代码",
            "type" : "text"
          },
          "brand":{
            "name":"brand",
            "label" : "品牌",
            "type" : "text"
          },
          "model":{
            "name":"model",
            "label" : "型号",
            "type" : "text"
          },
          "description":{
            "name":"discription",
            "label" : "描述",
            "type" : "text",
          },
          "size":{
            "name":"size",
            "label" : "规格",
            "type" : "text",
          }
        }
      },
      "options":{
        "name":"options",
        "assocObjectType" : "Tire",
        "idField" : "itemCode",
        "optionConfig":{
          "title":["name","itemCode"],
          "body" :["brand","spec","size","model"]
        }
      }
    },
    "storageBinPicker":{
      "name":"storageBinPicker",
      "label":"选择库位",
      "inlineDisplay" : true,
      "fields":{
        "dot":{
          "name":"dot",
          "label" : "周期",
          "type" : "text"
        },
        "scheduleAmount":{
          "name" : "scheduleAmount",
          "label" : "数量",
          "type" : "number"
        }
      }
    },
    "reviewPane":{
      "name" : "reviewPane",
      "label" : "入库计划单预览",
      "generalInfo":{
        "fields":[{
            "name":"inboundId",
            "label" : "入库单号",
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
            "name":"operator",
            "label" : "操作人",
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
        "columns" : [{
            "name":"brand",
            "label" : "品牌",
          },{
              "name":"storageBinId",
              "label" : "库位号",
          },{
              "name":"dot",
              "label" : "周期",
          },{
              "name":"amount",
              "label" : "计划数量",
          },{
              "name" : "actual",
              "label" : "实际数量",
          }
        ]
      }
    }
  }
}
module.exports = inboundScheduleApp;
