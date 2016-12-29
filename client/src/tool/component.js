'use strict'
import decStorageApp from './component/decStorageApp';
import listPicker from './component/listPicker/listPicker';
import widget from './widget/widget'

export default function(moduleName){

  listPicker(moduleName);
  decStorageApp(moduleName);
  widget(moduleName);
}


function PanelCtl(){
  console.log('panel');
}
