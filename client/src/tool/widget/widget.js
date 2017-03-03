'use strict'
import importForm from './form/inputForm';
import rangeField from './form/rangeField';
import textSearchField from './form/textSearchField';
import assocPicker from './assocPicker/assocPicker';
import listView from './layout/listView';
import infoTable from './layout/infoTable';
import listTable from './layout/listTable';
import inputPanel from './layout/inputPanel';
import listPanel from './layout/listPanel';
import editListTable from './layout/editListTable';
import editTableRow from './layout/editTableRow';
import storageBinSelector from './storageBinSelector/storageBinSelector'
export default function(moduleName){
  importForm(moduleName);
  infoTable(moduleName);
  editListTable(moduleName);
  editTableRow(moduleName);
  rangeField(moduleName);
  textSearchField(moduleName);
  assocPicker(moduleName);
  listView(moduleName);
  listTable(moduleName);
  listPanel(moduleName);
  inputPanel(moduleName);
  storageBinSelector(moduleName);
  console.log('widget loaded');
}
