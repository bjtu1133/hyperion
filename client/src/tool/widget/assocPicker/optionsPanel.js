'use strict'

import {printLabel} from '../../util';

export default function(moduleName){
  angular.module(moduleName)
  .component('optionsPanel', {
    templateUrl: './src/tool/widget/assocPicker/template/optionsPanel.html',
    controller : optionsPanelCtl,
    bindings:{
      fieldDef : '<',
      options : '<',
      selectedItemIds : '=',
      selectedItems : '=',
      onSelected : '&'
    }
  });
}
function optionsPanelCtl($scope){
  let ctrl = this;
  let titleCfg = ctrl.fieldDef.optionConfig.title;
  $scope.list = ctrl.options;
  $scope.optionCfg = ctrl.fieldDef.optionConfig
  $scope.idField=ctrl.fieldDef.idField;
  $scope.selectedItemIds = ctrl.selectedItemIds;
  $scope.numOfItems = 10;
  $scope.printLabel = printLabel;

  $scope.select = (item)=>{
    $scope.selectedItemIds.push(item[$scope.idField]);
    ctrl.selectedItems.push(item);
    ctrl.onSelected();
  };

  //console.log(ctrl);
}
