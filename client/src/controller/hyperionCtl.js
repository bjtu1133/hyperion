//import getForms from '../config/addNewForm';
'use strict'

export default function hyperionCtl (AuthendicationService,$scope,$location){

 //$scope.login = { name: 'login.html', url: 'login.html'};
 //console.log(AuthendicationService.checkSession({userId:'abc'}));
AuthendicationService.authendicate({},(auth)=>{
   $scope.authendicated = auth.result;
   if(!$scope.authendicated){
    $scope.loginData = {};
    $scope.login = ()=>{
      AuthendicationService.login($scope.loginData,()=>{
        window.location.reload();
      });
    }
  }else{
    $scope.userInfo = auth.userInfo;
    $scope.logoff = ()=>{
      AuthendicationService.logoff({},()=>{
        window.location.reload();
      })
    };
  }
 });

}
