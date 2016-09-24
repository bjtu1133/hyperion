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
    'idField' : 0
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
    'idField' : 1
  }
};

export default function getForms(){
  return forms;
};
