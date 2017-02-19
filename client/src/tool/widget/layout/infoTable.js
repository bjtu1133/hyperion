'use strict'

export default function(moduleName){
  angular.module(moduleName)
  .component('infoTable', {
    templateUrl: './src/tool/widget/layout/template/info-table.html',
    controller: infoTableCtl,
    bindings:{
      fieldDef : '<',
      data : '<'
    }
  });
}
function infoTableCtl($scope){
  //build rows
  let ctrl = this;

  $scope.fields = ctrl.fieldDef.fields;

  this.$onChanges = ()=>{
    $scope.data = ctrl.data;
  };

  $scope.parseDate = (date)=>{
    if(date)
      return new Date(date).toLocaleDateString();
  };
  console.log(ctrl);
}
