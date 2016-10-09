import getForms from '../config/listViewForm';

export default function listCtl(ObjectService,$stateParams,$scope){
  $scope.listType = 'Storage';
  $scope.resourceList = [];
  /*
  * Table Header
  */
  $scope.headers = getForms()['storageDashboard'].headers;
  /*
  * Table body data
  */
  $scope.keys = getForms()['storageDashboard'].resourceFieldsKeys;
  ObjectService.get({'objType' : 'Storage'},
  (list)=>{
    $scope.resourceList = list;
  },
  (err)=>{
    console.log(err);
  });
}
