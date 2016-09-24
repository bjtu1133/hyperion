import getForms from '../config/addNewForm';



let brands = [
  {
    'name' : 'Pireli',
    'label' : {
      'eng' : 'Pirelli',
      'chs' : '倍耐力'
    },
    'description' : 'This is a famous tire brands from Italy. 这是一个来自意大利的轮胎品牌'
  },
  {
    'name' : 'Good Year',
    'label' : {
      'eng' : 'Good Year',
      'chs' : '固特异'
    },
    'description' : 'This is a famous tire brands from USA. 这是一个来自美国的轮胎品牌'
  },
  {
    'name' : 'Michelin',
    'label' : {
      'eng' : 'Michelin',
      'chs' : '米其林'
    },
    'description' : 'This is a famous tire brands from France. 这是一个来自法国的轮胎品牌'
  },
];

export default function addNewCtl (AddNewService,$stateParams,$scope){
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

  $scope.fields = createFormFields(form.fields);

  $scope.submit = ()=>{

    let objType = form.objType;
    let idField = $scope.fields[form.idField]


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
/*
* Create Fields for the form
*/
function createFormFields(fieldsDef){
  if(!fieldsDef || fieldsDef.length < 0) reuturn;

  let fields = [];

  fieldsDef.forEach((currentValue,index) => {
    if(!currentValue || !currentValue.fieldType) return;
    let field = {};

    if (currentValue.fieldType == 'text-search'){
      field = createTextSearchField(currentValue,index);
    } else {
      field = createTextField(currentValue,index);
    }

    fields.push(field);
  });

  return fields;
}
/*
* Create a TextSearch Field
*/
function createTextSearchField(fieldDef,fieldIdx){

  let field = createTextField(fieldDef,fieldIdx);

  if (fieldDef.optionsService){
    field.fieldType = fieldDef.fieldType;
    /* Hard Coded, Should be replaced by calling service*/
    /* begin */
    let options = brands;
    /* end */
    field.options = [];
    options.forEach((option) => {
      field.options.push({
        'header' : option.label['eng']+' | '+option.label['chs'],
        'body' : option.description,
        'value' : option.name
      });
    });
  }else{
    field.fieldType = 'text';
  }
  return field;
}
/*
* Create a Text Field
*/
function createTextField(fieldDef,fieldIdx){
  let field = {
    value : '',
    setFieldValue : (value) => {
      field.value = value;
    }
  };
  field.fieldName = fieldDef.fieldName;
  field.placeholder = fieldDef.placeholder;
  field.fieldLabel = fieldDef.fieldLabel;
  field.required = fieldDef.required;
  field.fieldType = fieldDef.fieldType;
  return field;
}
