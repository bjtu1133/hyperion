
import fieldService from './form/fieldService';
import viewService from './viewService';
import hyperionService from './hyperionService';

export default function service($resource){

  let module = angular.module('hyperion');
  /*
  * Service using by Add New
  * TO DO merge addNewService to ObjectService
  */
  module.factory('AddNewService',($resource) => {
    return $resource('/addNew/:objType/:idField/:idValue',null,{
      'get' : {method : 'GET', isArray : false},
      'update' : {method : 'PUT'},
      'save' : {method : 'POST'}
    });
  });
  /*
  * Service to achieve objects
  */
  module.factory('ObjectService',($resource) => {
    return $resource('/object',null,{
      'get' : {method : 'GET', isArray : true, url :'/object/:objType'},
      'getById' : {method : 'GET', isArray : false, url :'/object/:objType/:idField/:idValue'},
      'addNew' : {method : 'POST'},
      'update' : {method : 'POST', url : '/object/update'},
      'getObjectsByField' : {method : 'GET', isArray : true, url :'/objects/:objType/:idField/:idValue'},
      'queryObjects' : {method : 'GET', isArray : true, url:'/objects'}
    });
  });

  fieldService('hyperion');
  viewService('hyperion');
  hyperionService('hyperion');
}
