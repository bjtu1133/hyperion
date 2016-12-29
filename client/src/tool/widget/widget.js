'use strict'
import rangeField from './form/rangeField';
import textSearchField from './form/textSearchField';

export default function(moduleName){

  rangeField(moduleName);
  textSearchField(moduleName);
  console.log('widget loaded');
}
