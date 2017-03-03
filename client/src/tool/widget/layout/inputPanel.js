'use strict'

export default function(moduleName){
  angular.module(moduleName)
  .component('inputPanel', {
    templateUrl: './src/tool/widget/layout/template/input-panel.html',
    controller: inputPanelCtl,
    bindings:{
      fieldDef : '<',
      inputObject : '<',
    }
  });
}
function inputPanelCtl($scope,$state){

  let ctrl = this;

  $scope.fieldDef = ctrl.fieldDef;

  ctrl.inputObject = {};

  $scope.submit = ()=>{

    $state.go(ctrl.fieldDef.target,ctrl.inputObject);
  };

  //console.log(ctrl);
}
