'use strict'

export default function fieldService(moduleName){
  let factory = angular.module(moduleName).factory;

  factory('FormFieldService',['TextField','TextSearchField',
  (TextField,TextSearchField,ComputedField)=>{
    return {
      createFields : (fieldsDef) => {
        if(!fieldsDef || fieldsDef.length < 0) reuturn;

        let fields = [];

        fieldsDef.forEach((currentValue,index) => {
          if(!currentValue || !currentValue.fieldType) return;
          let field = {};

          if (currentValue.fieldType == 'text-search'){
            field = TextSearchField.createNew(currentValue,index);
          } else {
            field = TextField.createNew(currentValue,index);
          }

          fields.push(field);
        });

        return fields;
      }
    };
  }]);
  factory('TextSearchField',['TextField','ObjectService',
    (TextField,ObjectService) => {
    function loadOptions (config,query){
      let options = [];
      if(!config || !config.objType || !config.value){
        console.log('Options Config information is not Correct');
        return;
      }
      if(!query){
        query = {'objType' : config.objType};
      }
      ObjectService.get(query,(objects)=>{

        if(objects && objects.length){

          objects.forEach((object) => {
            let option = {
              header : '',
              body : '',
              value : ''
            };
            if(config.header && config.header.length > 0){
              config.header.forEach((key)=>{
                if (object[key]){
                  option.header += object[key];
                }else{
                  option.header += key;
                }
              })
            }
            if(config.body && config.body.length > 0){
              config.body.forEach((key)=>{
                if (object[key]){
                  option.body += object[key];
                }else{
                  option.body += key;
                }
              })
            }
            if(config.value && config.value.length > 0){
              config.value.forEach((key)=>{
                if (object[key]){
                  option.value += object[key];
                }else{
                  option.value += key;
                }
            })
          }
            options.push(option);
          });
          return options;
        }else
          return [];
      });
      return options;
    }
    return {
      createNew : (fieldDef,fieldIdx) => {

        let field = TextField.createNew(fieldDef,fieldIdx);
        if (fieldDef.optionsConfig){

          field.fieldType = fieldDef.fieldType;
          field.options = loadOptions(fieldDef.optionsConfig);
        }else{
          field.fieldType = 'text';
        }
        return field;
      }
    };
  }]);

  factory('TextField',() => {
    return {
      createNew : (fieldDef,fieldIdx)=> {
        let field = {
          value : '',
          setFieldValue : (value) => {
            field.value = value;
          }
        };
        field.readonly = fieldDef.readonly;
        field.fieldName = fieldDef.fieldName;
        field.placeholder = fieldDef.placeholder;
        field.fieldLabel = fieldDef.fieldLabel;
        field.required = fieldDef.required;
        field.fieldType = fieldDef.fieldType;
        field.hidden = fieldDef.hidden;
        return field;
      }
    };
  });

  console.log('FormFieldService Loaded');
}
