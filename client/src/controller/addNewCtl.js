/*
* ConfigInfo Object
*{
* type The object type we are going to create. English charactor only. For Example 'brand'
* objLabel The label of the object We are going to create. For Example : ‘品牌’，'brand'
*}
*/
let forms = {
  'newBrand' : {
    'title' : {
      'default' : '添加新的品牌',
      'eng' : 'Add New Brand',
      'chs' : '添加新的品牌'
    },
    'fields' : [
      {
        'fieldName' : 'brandName',
        'fieldLabel' : {
          'default' : '品牌名称 :',
          'eng' : 'Brand Name :',
          'chs' : '品牌名称:'
        },
        'placeholder' : {
          'default' : '请输入品牌的英文名称 例如 ：Goodyear',
          'eng' : 'Please Type the English Brand Name, for Example "Goodyear"',
          'chs' : '请输入品牌的英文名称 例如 ： Goodyear'
        },
        'fieldType' : 'text',
        'required' : true
      },
      {
        'fieldName' : 'nickName',
        'fieldLabel' : {
          'default' : '中文别名 :',
          'eng' : 'Chinese Brand Name :',
          'chs' : '中文别名:'
        },
        'placeholder' : {
          'default' : '请输入品牌的中文名称 例如 ：固特异',
          'eng' : 'Please Type the Chinese Brand Name, for Example "固特异"',
          'chs' : '请输入品牌的中文名称 例如 ： 固特异'
        },
        'fieldType' : 'text',
        'required' : false
      },
      {
        'fieldName' : 'description',
        'fieldLabel' : {
          'default' : '描述 :',
          'eng' : 'Description :',
          'chs' : '描述 （中文）:'
        },
        'placeholder' : {
          'default' : '请输入关于品牌的介绍，最多不超过200字',
          'eng' : 'Please Type the description for this brand less than 200 charactors',
          'chs' : '请输入关于品牌的介绍，最多不超过200字'
        },
        'fieldType' : 'textarea',
        'required' : false
      },
    ],
    'objType' : 'Brand',
    'idField' : 'brandName'
  },
  'newProduct' : {
    'title' : {
      'default' : '添加新的型号',
      'eng' : 'Add New Product',
      'chs' : '添加新的型号'
    },
    'fields' : [
      {
        'fieldName' : 'brandName',
        'fieldLabel' : {
          'default' : '品牌名称 :',
          'eng' : 'Brand Name :',
          'chs' : '品牌名称:'
        },
        'placeholder' : {
          'default' : '请输入品牌的英文名称 例如 ：Goodyear',
          'eng' : 'Please Type the English Brand Name, for Example "Goodyear"',
          'chs' : '请输入品牌的英文名称 例如 ： Goodyear'
        },
        'fieldType' : 'text-search',
        'required' : true,
        'options' : '',
        'optionsService' : 'Brands',
        'optionsQuery' : ''
      },
      {
        'fieldName' : 'productno',
        'fieldLabel' : {
          'default' : '型号 :',
          'eng' : 'Product # :',
          'chs' : '型号:'
        },
        'placeholder' : {
          'default' : '请输入要添加的型号 例如 ：FS90823',
          'eng' : 'Please Type the Product #, for Example "FS90823"',
          'chs' : '请输入要添加的型号 例如 ：FS90823'
        },
        'fieldType' : 'text',
        'required' : true
      },
      {
        'fieldName' : 'size',
        'fieldLabel' : {
          'default' : '规格 :',
          'eng' : 'size # :',
          'chs' : '规格:'
        },
        'placeholder' : {
          'default' : '请输入要添加的规格 例如 ：255/40R18',
          'eng' : 'Please Type the Product #, for Example "255/40R18"',
          'chs' : '请输入要添加的型号 例如 ：255/40R18'
        },
        'fieldType' : 'text',
        'required' : true
      },
      {
        'fieldName' : 'feature',
        'fieldLabel' : {
          'default' : '特征 :',
          'eng' : 'Product # :',
          'chs' : '特征 :'
        },
        'placeholder' : {
          'default' : '请输入要添加的特征 例如 ：Pzero Rosso Mo 防爆',
          'eng' : 'Please Type the Product Feature, for Example "Pzero Rosso Mo 防爆"',
          'chs' : '请输入要添加的特征 例如 ：Pzero Rosso Mo 防爆'
        },
        'fieldType' : 'text',
        'required' : true
      }
    ],
    'objType' : 'Product',
    'idField' : 'fieldName'
  }
};

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

    let idField = form.idField;
    let formData = {}

    $scope.fields.forEach((currentValue) => {
      if(!currentValue || !currentValue.fieldName){
        alert("field name is empty");
        return ;
      }
      formData[currentValue.fieldName] = currentValue.value;
    });

    AddNewService.get({'objType':'Brand','idValue':'GoodYear','idField':'brandName'},(object)=>{
      if(object && object._id){
        console.log('exist');
      }else{
        object.objType = form.objType;
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
