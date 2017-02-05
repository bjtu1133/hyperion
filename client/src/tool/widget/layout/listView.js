export default function(moduleName){
  angular.module(moduleName)
  .component('listView', {
    templateUrl: './src/tool/widget/layout/template/list-view.html',
    controller: listViewCtl,
    bindings:{
      fieldDef : '<',
      store : '='
    }
  });
}

function listViewCtl($scope){
  let ctrl = this;
  $scope.store = ctrl.store;
  console.log(ctrl);
}
