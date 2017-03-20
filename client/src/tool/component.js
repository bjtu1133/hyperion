'use strict'
import decStorageApp from './component/decStorageApp';
import listPicker from './component/listPicker/listPicker';
import widget from './widget/widget'
import inboundScheduleApp from './component/inboundScheduleApp';
import outboundScheduleApp from './component/outboundScheduleApp';
import inboundApp from './component/inboundApp';
import outboundApp from './component/outboundApp';

export default function(moduleName){

  listPicker(moduleName);
  decStorageApp(moduleName);
  widget(moduleName);
  inboundScheduleApp(moduleName);
  outboundScheduleApp(moduleName);
  inboundApp(moduleName);
  outboundApp(moduleName);
}
