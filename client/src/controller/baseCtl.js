'use strict'

export default function baseCtl(data,$scope){
  $scope.data = data;
  console.log(data.viewName);
  console.log('baseCtl');
}
