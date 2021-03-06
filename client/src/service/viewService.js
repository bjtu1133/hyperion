'use strict'

export default function viewService(moduleName,$resource){

  let factory = angular.module(moduleName).factory;

  factory('ViewService',['ObjectService',(ObjectService)=>{
    function build(summary,fieldDef,objId){

      let q = {'objType': fieldDef.objType,
              'idField': fieldDef.idField,
              'idValue': objId };
      ObjectService.getById(q,(object)=>{
        let fields = [];
        fieldDef.fields.forEach((curFieldDef)=>{
          let field = {};
          field.name = curFieldDef.fieldName;
          field.fieldType = curFieldDef.fieldType;
          field.fieldLabel = curFieldDef.fieldLabel;
          if(curFieldDef.fieldType == 'propertyGroup'){

            build(field,curFieldDef,object.doc[curFieldDef.idField]);
          }else if (curFieldDef.fieldType == 'time'){

            field.value = new Date(object.doc[field.name]).toLocaleString();
          }else if (curFieldDef.fieldType == 'property'){

            field.value = object.doc[field.name];
          }
          fields.push(field);
          summary.fields = fields;
        })
      });

    }
    return {
      buildSummaryObject : (summary,fieldDef,objId) => {

        build(summary,fieldDef,objId);
      }
    }
  }]);

  factory('ViewDefService',($resource) => {
    return $resource('/view/getViewDef/:viewName',null,{
      'get' : {method:'GET',isArray:false}
    });
  });
  factory('ViewDefLoacalStorage',function(){
    this.store = {};
    return {
      set : (key,value)=>{
        this.store[key] = value;
      },
      get : (key) => {
        return this.store[key];
      }
    }
  });

  console.log('Store Service Loaded');
}
