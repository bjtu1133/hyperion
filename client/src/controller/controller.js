'use strict'
import addNewCtl from './addNewCtl';
import storageCtl from './storageCtl';

export default function controller (moduleName){

  let module = angular.module(moduleName);
  module.controller('addNewCtl',addNewCtl);
  module.controller('storageCtl',storageCtl);

}
