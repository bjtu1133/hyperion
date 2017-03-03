'use strict'

export default function baseCtl(data,$scope,$stateParams){
  $scope.data = data;
  $scope.params = $stateParams;
  //console.log('baseCtl');
  //console.log($stateParams);
}
