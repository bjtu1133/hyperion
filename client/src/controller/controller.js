
import addNewCtl from './addNewCtl';

export default function controller (moduleName){

  let module = angular.module(moduleName);
  module.controller('addNewCtl',addNewCtl);
}
