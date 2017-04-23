import {printLabel} from '../../util';

export default function(moduleName){
  angular.module(moduleName)
  .component('filterListPanel', {
    templateUrl: './src/tool/widget/layout/template/filter-list-panel.html',
    controller: filterListPanelCtl,
    bindings:{
      fieldDef : '<',
    }
  });
}

function filterListPanelCtl(ObjectService,$scope,$state){
  let ctrl = this;
  ctrl.store = [];

  ctrl.$onInit = ()=>{

    ObjectService.query(
      {'objType' : ctrl.fieldDef.objType},
      {'status' : 'open'},
      (list)=>{
      list.forEach((item)=>{
        ctrl.store.push(item);
        console.log('p');
      });
    });

    $scope.header = ctrl.fieldDef.label;
    $scope.printLabel = printLabel;
    $scope.displayConfig = ctrl.fieldDef.displayConfig;
    $scope.store = ctrl.store;
    $scope.onItemClick = (item)=>{
      if(ctrl.fieldDef.target && ctrl.fieldDef.targetCfg){
        let param = {};
        param[ctrl.fieldDef.targetCfg.targetKey] = item[ctrl.fieldDef.targetCfg.itemKey];
        $state.go(ctrl.fieldDef.target,param);
      }
    };
  }




  console.log(ctrl);
}
