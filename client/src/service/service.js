
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
    return $resource('/object',null,{
      'get' : {method : 'GET', isArray : true, url :'/object/:objType'},
      'getById' : {method : 'GET', isArray : false, url :'/object/:objType/:idField/:idValue'},
      'addNew' : {method : 'POST'},
      'increase' : {method : 'POST', url : '/object/increase'}
    });
  });

  fieldService('hyperion');
}
