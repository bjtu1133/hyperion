'use strict'
export default function(moduleName){
  angular.module(moduleName)
  .component('listPickerFilterPanel', {
    templateUrl: './src/tool/component/listPicker/template/listPickerFilterPanel.html',
    controller: filterPanelCtl,
    bindings:{
      attr : '<',
      store : '<',
      onFilter : '&'
    }
  });
}
function filterPanelCtl($scope){
  let ctrl = this;
  let store = ctrl.store;

  ctrl.$onInit = ()=>{
    $scope.fields = ctrl.attr.fields;
  };

  $scope.submit = ()=>{
    let fields = $scope.fields;

    for( let i in fields){
      store[fields[i].fieldName]=fields[i];
    }

    ctrl.onFilter();
  };
}
