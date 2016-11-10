'use strict'

export default function hyperionService(moduleName,$resource){

  let factory = angular.module(moduleName).factory;

  factory('AuthendicationService',($resource)=>{
    return $resource('/auth',null,{
      login : {method : 'POST',url : '/login'},
      authendicate : {method : 'POST'},
      logoff : {method : 'POST',url:'auth/logoff'}
    });
  });
}
