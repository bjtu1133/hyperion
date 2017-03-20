'use strict'
export default function(moduleName){
  angular.module(moduleName)
  .component('listPickerSelectionPanel', {
    templateUrl: './src/tool/component/listPicker/template/listPickerSelectionPanel.html',
    controller:()=>{

    }
  });
  console.log('List Picker Selection Loaded');
}
