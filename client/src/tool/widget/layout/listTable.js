export default function(moduleName){
  angular.module(moduleName)
  .component('listTable', {
    templateUrl: './src/tool/widget/layout/template/list-table.html',
    controller: listTableCtl,
    bindings:{
      fieldDef : '<',
      itemList : '<'
    }
  });
}

function listTableCtl($scope){
  let ctrl = this;

  $scope.columns = ctrl.fieldDef.columns;

  this.$onChanges = ()=>{
    $scope.itemList = ctrl.itemList;
  }
  console.log(ctrl);
}
