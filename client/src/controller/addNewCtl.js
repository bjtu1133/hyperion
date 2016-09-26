import getForms from '../config/addNewForm';

export default function addNewCtl (AddNewService,FormFieldService,$stateParams,$scope){
  /*
  * forms should be some value from service instead of hard code
  */
  let forms = getForms();
  let formType = $stateParams.formType;
  if(!formType || !forms || !forms[formType]) {
    return;
  }
  let form = forms[formType];
  /*
  * Set title of the form
  */
  $scope.formTypeLabel = form.title['default'];
  /*
  * Create data object of the form
  */

  $scope.fields = FormFieldService.createFields(form.fields);

  $scope.submit = ()=>{

    let objType = form.objType;
    let idField = $scope.fields[form.idField];
    let formData = {}

    $scope.fields.forEach((currentValue) => {
      if(!currentValue || !currentValue.fieldName){
        alert("field name is empty");
        return ;
      }
      formData[currentValue.fieldName] = currentValue.value;
    });

    let q = {'objType':objType,
            'idField':idField.fieldName,
            'idValue':idField.value}

    AddNewService.get(q,(object)=>{

      if(object.doc){
        alert('添加的对象已经存在');
      }else{
        object.objType = objType;
        object.data = formData;
        object.$save();
      }
    });
  };
}
