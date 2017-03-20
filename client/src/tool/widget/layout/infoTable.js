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
  //console.log(this);
  let ctrl = this;

  this.$onChanges = ()=>{
    $scope.data = ctrl.data;
  };

  $scope.parseDate = (date)=>{
    if(date)
      return new Date(date).toLocaleDateString();
  };
}
