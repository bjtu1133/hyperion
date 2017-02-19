'use strict'
import filterPanel from './filterPanel';
import optionsPanel from './optionsPanel';

export default function(moduleName){
  filterPanel(moduleName);
  optionsPanel(moduleName);
  angular.module(moduleName)
  .component('assocPicker', {
    templateUrl: './src/tool/widget/assocPicker/template/assocPicker.html',
    controller : assocPickerCtl,
    bindings:{
      fieldDef : '<',
      selectedItems:'=',
      selectedItemIds:'='
    }
  });
}

function assocPickerCtl(){
  let ctrl = this;
  ctrl.filterFiledDef = ctrl.fieldDef.filter;
  ctrl.optionsFiledDef = ctrl.fieldDef.options;
  ctrl.selectedItems =[];
  ctrl.selectedItemIds =[];
  ctrl.optionsStore = [];
  ctrl.onFilter = ()=>{
    console.log(ctrl.optionsStore);
  }
  ctrl.onSelected = () =>{
    console.log(ctrl.selectedItems);
  }
  //console.log(ctrl);
}