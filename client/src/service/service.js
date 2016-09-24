export default function service($resource){

  let module = angular.module('hyperion')
  module.factory('AddNewService',($resource) => {
    return $resource('/addNew/:objType/:idField/:idValue',null,{
      'get' : {method : 'GET', isArray : false},
      'update' : {method : 'PUT'},
      'save' : {method : 'POST'}
    });
  });
}
