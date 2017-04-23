'use strict'

export default function(moduleName){
  angular.module(moduleName)
  .component('inputForm', {
    templateUrl: './src/tool/widget/form/template/input-form.html',
    controller: inputFormCtl,
    bindings:{
      fieldDef : '<',
      inputObject : '=',
      onUpdate : '&'
    }
  });
}
function inputFormCtl($scope){
  let ctrl = this;
  ctrl.$onInit = ()=>{
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
      if(ctrl.onUpdate) {ctrl.onUpdate();}
    };

    $scope.onBooleanFieldChange = (field) => {
      ctrl.inputObject[field.name] = field.value;
      if(ctrl.onUpdate) {ctrl.onUpdate();}
    };
  }
  //console.log(ctrl);
}
