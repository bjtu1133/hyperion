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
  ctrl.$onInit = () =>{
    $scope.parseDate = (date)=>{
      if(date)
        return new Date(date).toLocaleDateString();
    };
  }
  ctrl.$onChanges = ()=>{
    $scope.data = ctrl.data;
  };

}
