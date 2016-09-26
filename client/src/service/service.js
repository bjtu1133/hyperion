
import fieldService from './form/fieldService';

export default function service($resource){

  let module = angular.module('hyperion');
  /*
  * Service using by Add New
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
    return $resource('/object/:objType',null,{
      'get' : {method : 'GET', isArray : true, url :'/object/:objType'}
    });
  });

  fieldService('hyperion');
}
