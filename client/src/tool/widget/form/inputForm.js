'use strict'

export default function(moduleName){
  angular.module(moduleName)
  .component('inputForm', {
    templateUrl: './src/tool/widget/form/template/input-form.html',
    controller: inputFormCtl,
    bindings:{
      fieldDef : '<',
      inputObject : '='
    }
  });
}
function inputFormCtl($scope){
  let ctrl = this;
  //console.log(ctrl);
  if (!ctrl.fieldDef || !ctrl.fieldDef.fields){
    console.log('field def error');
    return;
  }

  let fieldDef = ctrl.fieldDef;

  $scope.fields = Object.keys(fieldDef.fields).map(key=>angular.copy(fieldDef.fields[key]));
  $scope.inlineDisplay = fieldDef.inlineDisplay;

  $scope.onFieldChange = (field)=>{
    if(field.value){
      ctrl.inputObject[field.name] = field.value;
    }
  }

  //console.log(ctrl);
}
