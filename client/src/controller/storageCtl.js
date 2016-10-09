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
  $scope.formData.lastUpdatedTime = Date.now();
  $scope.submit = ()=>{
    let q = {'objType':'Storage',
            'idField':'storageId',
            'idValue':$scope.formData['storageId']};
    ObjectService.getById(q,(object)=>{

      object.objType = 'Storage';
      if(!object.doc){
        if(formType == 'decrease'){
          alert('库存不存在');
        }else{
          object.data = $scope.formData;
          object.$addNew([],()=>{
            alert('进库单已经提交');
            $scope.addRecord();
          },
          ()=>{
            alert('进库单提交失败');
          });
        }
      }else{
        if(formType == 'decrease'){

          if(object.doc.amount < $scope.formData['amount']){
            alert('库存不足');
            return;
          }else{
            object.data = {'amount' : -$scope.formData['amount']}
          }

        } else if(formType == 'increase'){

          object.incData = {
            'amount' : $scope.formData['amount'],
          };
          object.setData = {
            'lastUpdatedTime' : $scope.formData['lastUpdatedTime']
          }
        }
        object.q = {'storageId' : $scope.formData['storageId']};

        object.$update([],()=>{
          alert('进/出库单已经提交');
          console.log(object);
          $scope.addRecord();
        },
        () => {
          alert('进/出库单提交失败');
        });
      }
    });
  }

  $scope.addRecord = () => {
    let record = {};

    record.data = {
      'storageId' : $scope.formData['storageId'],
      'operation' : (formType == 'increase') ? '+' : '-',
      'amount' : $scope.formData['amount'],
      'updatedTime' : Date.now(),
      'warehouseno' : $scope.formData['warehouseno'],
      'location' : $scope.formData['location'],
      'operator' : '胡建博',
    };
    record.objType = 'StorageRecord';

    ObjectService.addNew(record);
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
