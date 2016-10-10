import getForms from '../config/listViewForm';

export default function listCtl(ObjectService,$stateParams,$scope){

  let formType = $stateParams.formType;
  let form = getForms()[formType]
  /*
  * Table Header
  */
  $scope.fields = form.fields;
  /*
  * Table body data
  */
  $scope.resourceList = [];
  $scope.keys = form.fieldsKeys;

  ObjectService.get({'objType' : form.objType},
  (list)=>{
    $scope.resourceList = [];
    list.forEach((item) => {
      let resourceItem = {};
      let keys = $scope.keys;
      for(let i=0 ; i< keys.length ; i++){
        let key = keys[i];
        if($scope.fields[key].type == 'Time' && item[key]){

          resourceItem[key] = new Date(item[key]).toLocaleString();
        }else
          resourceItem[key] = item[key];
      }
      $scope.resourceList.push(resourceItem);
    });
  },
  (err)=>{
    console.log(err);
  });
}
