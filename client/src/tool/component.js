'use strict'
import decStorageApp from './component/decStorageApp';
import listPicker from './component/listPicker/listPicker';
import widget from './widget/widget'
import inboundApp from './component/inboundApp';

export default function(moduleName){

  listPicker(moduleName);
  decStorageApp(moduleName);
  widget(moduleName);
  inboundApp(moduleName);
}


function PanelCtl(){
  console.log('panel');
}
