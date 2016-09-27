'use strict'
import getForms from '../config/storageForm';

export default function addNewCtl(FormFieldService,$stateParams,$scope){
  /*
  * forms should be some value from service instead of hard code
  */
  let forms = getForms();
  
  let form = forms['add'];
  $scope.formTypeLabel = form.title['default'];
  $scope.fields = FormFieldService.createFields(form.fields);
  console.log($scope.fields);
}
