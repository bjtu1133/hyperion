export default function service($resource){
 /*
 * Sample Code
 */
  angular.module('hyperion')
  .factory('Brands', ($resource)=>{
    return $resource('/brand',null,{
      'update' : { method:'PUT' },
      'save'  : {method : 'POST'}
    });
  });

  angular.module('hyperion')
  .factory('Storage', ($resource)=>{
    return $resource('/storage',null,{
      'update' : { method:'PUT' },
      'get' : {method : 'Get' , isArray : false},
      'save'  : {method : 'POST'}
    });
  });
  /*
  * End of Sample Code
  */

  let module = angular.module('hyperion')
  module.factory('AddNewService',($resource) => {
    return $resource('/addNew/:objType/:idField/:idValue',null,{
      'get' : {method : 'GET', isArray : false},
      'update' : {method : 'PUT'},
      'save' : {method : 'POST'}
    });
  });
}
