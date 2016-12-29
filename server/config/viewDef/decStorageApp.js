"use strict"
let decStorageApp = {
  "viewName" : "decStorageApp",
  "components" : {
    "listPicker" : {
      "fieldName" : "listPicker",
      "components" : {
        "filterPanel" : {
          "viewName" : "filterPanel",
          "fields" : [
            {
              "fieldName" : "period",
              "fieldType" : "range",
              "label" : {
                "default" : "周期"
              },
              "fields" : {
                "from" : {
                  "fieldName" : "from",
                },
                "to" : {
                  "fieldName" : "to",
                  "label" : {
                    "default" : "到"
                  }
                }
              },
              "value" : null
            },
            {
              "fieldName" : "productno",
              "fieldType" : "text-search",
              'fieldLabel' : {
                'default' : '代码 :',
                'eng' : 'Product # :',
                'chs' : '代码:'
              },
              "options" : [],
              "optionConfig" : {
                "objType" : "Product",
                'header' : ['productno'],
                'body' : ['brandName','size','feature'],
                'value' : ['productno']
              }
            },
            {
              "fieldName" : "brand",
              "fieldType" : "text-search",
              'fieldLabel' : {
                'default' : '品牌 :',
                'eng' : 'Brand # :',
                'chs' : '品牌:'
              },
              "options" : [],
              "optionConfig" : {
                "objType" : "Brand",
                'header' : ['brandName'],
                'body' : ['nickName','description'],
                'value' : ['brandName']
              }
            }
          ]
        },
        "selectionPanel" : {
          "viewName" : "selectionPanel"
        }
      }
    }
  }
}
module.exports = decStorageApp;
