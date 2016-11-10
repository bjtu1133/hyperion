'use strict'
import getForms from '../config/storageForm';

export default function storageCtl(FormFieldService,ObjectService,$location,$stateParams,$scope){
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
    $scope.populateFormData();
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
            object.incData = {'amount' : -$scope.formData['amount']}
          }

        } else if(formType == 'increase'){

          object.incData = {
            'amount' : $scope.formData['amount'],
          };
        }

        object.setData = {
          'lastUpdatedTime' : $scope.formData['lastUpdatedTime']
        }

        object.q = {'storageId' : $scope.formData['storageId']};

        object.$update([],()=>{
          alert('进/出库单已经提交');
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
      'recordId' : $scope.formData['storageId']
                    + (Math.random()+Date.now()),
      'storageId' : $scope.formData['storageId'],
      'operation' : (formType == 'increase') ? '进库' : '出库',
      'amount' : $scope.formData['amount'],
      'updatedTime' : Date.now(),
      'warehouseno' : $scope.formData['warehouseno'],
      'warehouseArea' : $scope.formData['warehouseArea'],
      'operator' : $scope.formData['operator'],
    };
    record.objType = 'StorageRecord';

    ObjectService.addNew(record);

    $scope.redirectToRecordSummaryPage(record);
  }
/*
* Re Caculate storageId when fields Change
*/
  $scope.onChange = (field)=>{

    let fieldName = field.fieldName;
    if(fieldName == 'storageId'){
      $scope.populateObjectToFieldsByKeys(field.valueObject, $scope.fields,
          ['warehouseno', 'warehouseArea', 'productno', 'brandName', 'period']);
    }else {
      if(fieldName == 'productno'){
        $scope.populateObjectToFieldsByKeys(field.valueObject,$scope.fields,['brandName']);
      }
      $scope.populateStorageIdField();
    }
  };

  $scope.populateObjectToFieldsByKeys = (object,fields,keys)=>{
    if(!object){
      $scope.clearFieldsByKeys(fields,keys);
      return;
    }
    let objectKeys = (keys) ? keys : Object.keys(object);
    fields.forEach((curField)=>{
      if(objectKeys.includes(curField.fieldName)){
        curField.setFieldValue (object[curField.fieldName]);
      }
    });
  };

  $scope.clearFieldsByKeys = (fields,keys)=>{
    fields.forEach((curField)=>{
      if(keys.includes(curField.fieldName)){
        curField.setFieldValue ('',null);
      }
    });
  };
  $scope.populateStorageIdField = ()=>{

    let storageIdField = $scope.fields[0];
    let formula = [1,2,3,5];
    let delimiter = '_';
    let storageId = $scope.fields[formula[0]].value;
    for(let i=1 ; i< formula.length; i++){
      storageId = storageId + delimiter + $scope.fields[formula[i]].value;
    }
    storageIdField.setFieldValue(storageId,{});
  };

  $scope.populateFormData = ()=>{
    let formData = $scope.formData;
    let fields = $scope.fields;
    for(let i in fields){
      formData[fields[i].fieldName] = fields[i].value;
    }
  };

  $scope.redirectToRecordSummaryPage = (record) => {
    $location.path('hyperion/summary/storageRecordSummary/'+record.data.recordId);
  };
}
