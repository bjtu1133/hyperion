'use strict'

export default function(moduleName){
  angular.module(moduleName)
  .component('editListTable', {
    templateUrl: './src/tool/widget/layout/template/edit-list-table.html',
    controller: editListTableCtl,
    bindings:{
      fieldDef : '<',
      itemList : '<'
    }
  });
}
function editListTableCtl($scope){
  let ctrl = this;
  
  ctrl.newItem = createTemplate(ctrl.itemList[0],ctrl.fieldDef.newItemTemplateAttr);

  ctrl.addNewItem = ()=>{
    ctrl.itemList.push(ctrl.newItem);
    $scope.addNewItemRowVisible = false;
    ctrl.newItem = createTemplate(ctrl.itemList[0],ctrl.fieldDef.newItemTemplateAttr);
  };
  $scope.addNewButtonEnable = ctrl.fieldDef.addNewButtonEnable;
  $scope.columns = ctrl.fieldDef.columns;
  $scope.showHeader = ctrl.fieldDef.showHeader;
  $scope.addNewItemRowVisible = false;
  $scope.itemList = ctrl.itemList;
  $scope.showAddNewItemRow = ()=>{
    $scope.addNewItemRowVisible = true;
  };
  //console.log(ctrl);
}

function createTemplate(template,attr){
  let ret = {};
  if(!template || !attr || !attr.length){
    return ret;
  }
  for(let i=0 ; i< attr.length ; i++){
    ret[attr[i]] = template[attr[i]];
  }
  return ret;
}
