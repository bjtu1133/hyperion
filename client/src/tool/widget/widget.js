'use strict'
import importForm from "./form/inputForm";
import rangeField from './form/rangeField';
import textSearchField from './form/textSearchField';
import assocPicker from './assocPicker/assocPicker';
import listView from './layout/listView';
import storageBinSelector from './storageBinSelector/storageBinSelector'
export default function(moduleName){
  importForm(moduleName);
  rangeField(moduleName);
  textSearchField(moduleName);
  assocPicker(moduleName);
  listView(moduleName);
  storageBinSelector(moduleName);
  console.log('widget loaded');
}
