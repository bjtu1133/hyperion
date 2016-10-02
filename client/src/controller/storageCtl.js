'use strict'
import getForms from '../config/storageForm';

export default function storageCtl(FormFieldService,ObjectService,$stateParams,$scope){
  /*
  * forms should be some value from service instead of hard code
  */
  let forms = getForms();
  let formType = $stateParams.formType;
  let form = forms[formType];
  $scope.formTypeLabel = form.title['default'];
  $scope.fields = FormFieldService.createFields(form.fields);
  $scope.formData = {};
  $scope.submit = ()=>{
    let q = {'objType':'Storage',
            'idField':'storageId',
            'idValue':$scope.formData['storageId']};
    ObjectService.getById(q,(object)=>{

      object.objType = 'Storage';
      if(!object.doc){
        object.data = $scope.formData;
        object.$addNew();
      }else{
        if(formType == 'decrease'){
          console.log('object.doc.amount');
          if(object.doc.amount < $scope.formData['amount']){
            alert("库存不足");
            return;
          }
          object.data = {'amount' : -$scope.formData['amount']}

        } else if(formType == 'increase'){

          object.data = {'amount' : $scope.formData['amount']}
        }
        object.q = {'storageId' : $scope.formData['storageId']};
        object.$increase();
      }
    });
  }

  $scope.onChange = (fieldName,value)=>{
    let formData = $scope.formData;
    if(fieldName){
      formData[fieldName] = value;
      formData['storageId'] = formData['warehouseno']+
          '/'+formData['productno']+'/'+formData['period'];
    }
  };
}
