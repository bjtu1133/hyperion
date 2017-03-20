'use strict'
import listPickerFilterPanel from './listPickerFilterPanel';
import listPickerSelectionPanel from './listPickerSelectionPanel';

export default function(moduleName){
  listPickerFilterPanel(moduleName);
  listPickerSelectionPanel(moduleName);
  angular.module(moduleName)
  .component('listPicker', {
    templateUrl: './src/tool/component/listPicker/template/listPicker.html',
    controller:listPickerCtl,
    bindings:{
      attr : '<'
    }
  });
}
function listPickerCtl (ObjectService,$scope){
  let ctrl = this;

  ctrl.store = [];
  ctrl.query = {};
  ctrl.onFilter = (query)=>{
    console.log(query);
    ObjectService.query({'objType':'Storage'},query,(doc)=>{
      console.log(doc);
    });
  }
  ctrl.$onInit = function(){
    ctrl.filterAttr = ctrl.attr.components.filterPanel;
  };
}
