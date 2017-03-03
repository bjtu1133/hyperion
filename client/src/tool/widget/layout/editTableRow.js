'use strict'

export default function(moduleName){
  angular.module(moduleName)
  .component('editTableRow', {
    templateUrl: './src/tool/widget/layout/template/edit-table-row.html',
    controller: editTableRowCtl,
    bindings:{
      fieldDef : '<',
      item : '<',
      onSubmit : '&'
    }
  });
}
function editTableRowCtl($scope){
  let ctrl = this;

  $scope.columns = ctrl.fieldDef.columns;
  $scope.item = ctrl.item;
  $scope.submit = ()=>{
    ctrl.onSubmit();
    console.log(ctrl.item);
  }

  console.log(ctrl);
}
