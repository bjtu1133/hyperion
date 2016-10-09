'use strict'
import addNewCtl from './addNewCtl';
import storageCtl from './storageCtl';
import listCtl from './listCtl';

export default function controller (moduleName){

  let module = angular.module(moduleName);
  module.controller('addNewCtl',addNewCtl);
  module.controller('storageCtl',storageCtl);

  module.controller('listCtl',listCtl);

}
