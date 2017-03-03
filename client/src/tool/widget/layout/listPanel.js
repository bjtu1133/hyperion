'use strict'

export default function(moduleName){
  angular.module(moduleName)
  .component('listPanel', {
    templateUrl: './src/tool/widget/layout/template/list-panel.html',
    controller: inputPanelCtl,
    bindings:{
      fieldDef : '<',
      inputObject : '<',
    }
  });
}
function inputPanelCtl($scope,$state){

  let ctrl = this;


  console.log(ctrl);
}
