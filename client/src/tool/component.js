'use strict'
import decStorageApp from './component/decStorageApp';
import listPicker from './component/listPicker/listPicker';
import widget from './widget/widget'
import inboundScheduleApp from './component/inboundScheduleApp';

export default function(moduleName){

  listPicker(moduleName);
  decStorageApp(moduleName);
  widget(moduleName);
  inboundScheduleApp(moduleName);
}
