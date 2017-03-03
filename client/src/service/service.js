
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
      'update' : {method : 'POST', isArray : false, url : '/object/update'},
      'query' : {method:'POST', isArray:true, url:'/object/query/:objType'}
    });
  });

  /*
  * Service for Inbound, Outbound,Create Schedule
  */
  module.factory('StorageService',($resource) => {
    return $resource('/storage',null,{
      'createSchedule' : {method : 'POST', isArray : false, url:'/inbound/schedule/create'},
      'createInbound' : {method : 'POST', isArray : false, url:'/inbound/create'},
    });
  });

  fieldService('hyperion');
  viewService('hyperion');
  hyperionService('hyperion');
}
