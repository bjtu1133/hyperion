'use strict'

export default function(moduleName){
  angular.module(moduleName)
  .component('filterPanel', {
    templateUrl: './src/tool/widget/assocPicker/template/filterPanel.html',
    controller : filterPanelCtl,
    bindings:{
      fieldDef : '<',
      onFilter : '&',
      options : '='
    }
  });
}
function filterPanelCtl(ObjectService,$scope){
  let ctrl = this;
  ctrl.$inInit = ()=>{
    if (!ctrl.fieldDef || !ctrl.fieldDef.fields){
      console.log('field def error');
      return;
    }
    ctrl.inputObject = {};
    let fieldDef = ctrl.fieldDef;
    let options = ctrl.options;

    $scope.fields = Object.keys(fieldDef.fields).map(key=>fieldDef.fields[key]);

    $scope.submit= ()=>{
      //console.log(ctrl.inputObject);
      ObjectService.query({'objType':fieldDef.objType},ctrl.inputObject,(doc)=>{
        options.splice(0,options.length);
        doc.forEach((item)=>{
          options.push(item);
        });
        ctrl.onFilter();
      });
    }
  }
  //console.log(ctrl);
}
