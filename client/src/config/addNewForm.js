let forms = {
  'newBrand' : {
    'objType' : 'Brand',
    'idField' : 0,
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
    ]
  },
  'newProduct' : {
    'objType' : 'Product',
    'idField' : 1,
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
        'optionsConfig' : {
          'objType' : 'Brand',
          'header' : ['brandName',' | ','nickName'],
          'body' : ['description'],
          'value' : ['brandName']
        }
      },
      {
        'fieldName' : 'productno',
        'fieldLabel' : {
          'default' : '代码 :',
          'eng' : 'Product # :',
          'chs' : '代码:'
        },
        'placeholder' : {
          'default' : '请输入要添加的代码 例如 ：FS90823',
          'eng' : 'Please Type the Product #, for Example "FS90823"',
          'chs' : '请输入要添加的代码 例如 ：FS90823'
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
    ]
  },
  'newWarehouse' : {
    'objType' : 'Warehouse',
    'idField' : 0,
    'title' : {
      'default' : '添加新的仓库',
      'eng' : 'Add New Warehouse',
      'chs' : '添加新的仓库'
    },
    'fields' : [
    {
      'fieldName' : 'warehouseno',
      'fieldLabel' : {
        'default' : '仓库编号 :',
        'eng' : 'Warehouse # :',
        'chs' : '仓库编号 :'
      },
      'placeholder' : {
        'default' : '请输入要添加的仓库名称 例如 ：SY01',
        'eng' : 'Please Type the Product Feature, for Example "SY01"',
        'chs' : '请输入要添加的仓库名称 例如 ：SY01'
      },
      'fieldType' : 'text',
      'required' : true
    },

    {
      'fieldName' : 'name',
      'fieldLabel' : {
        'default' : '仓库名称 :',
        'eng' : 'Warehouse Name :',
        'chs' : '仓库名称 :'
      },
      'placeholder' : {
        'default' : '请输入要添加的仓库名称 例如 ：天骏沈阳仓库',
        'eng' : 'Please Type the Product Feature, for Example "天骏沈阳仓库"',
        'chs' : '请输入要添加的仓库名称 例如 ：天骏沈阳仓库'
      },
      'fieldType' : 'text',
      'required' : true
    },

    {
      'fieldName' : 'location',
      'fieldLabel' : {
        'default' : '位置 :',
        'eng' : 'Location',
        'chs' : '位置 :'
      },
      'placeholder' : {
        'default' : '请输入要添加的仓库的位置 例如 ：抚顺市顺城区新城路路29号',
        'eng' : 'Please Type the Product Feature, for Example "29 Xincheng Street, Shuncheng, Fushun"',
        'chs' : '请输入要添加的仓库的位置 例如 ：抚顺市顺城区新城路路29号'
      },
      'fieldType' : 'textarea',
      'required' : true
    }]
  },
  'newWarehouseArea' : {
    'objType' : 'WarehouseArea',
    'idField' : 0,
    'title' : {
      'default' : '添加新的库位',
      'eng' : 'Add New Warehouse Area',
      'chs' : '添加新的库位'
    },
    'fields' : [
      {
        'fieldName' : 'warehouseArea',
        'fieldLabel' : {
          'default' : '库位 :',
          'eng' : 'Area :',
          'chs' : '库位 :'
        },
        'placeholder' : {
          'default' : '请输入库位 例如 ：A01',
          'eng' : 'Please Type Warehouse Area #, for Example "A01"',
          'chs' : '请输入库位 例如 ：A01'
        },
        'fieldType' : 'text',
        'required' : true,
      },
      ]
  },
  'newMerchant' : {
    'objType' : 'Merchant',
    'idField' : 0,
    'title' : {
      'default' : '添加新的经销商',
      'eng' : 'Add New Warehouse Area',
      'chs' : '添加新的经销商'
    },
    'fields' : [
      {
        'fieldName' : 'merchantName',
        'fieldLabel' : {
          'default' : '名称 :',
          'eng' : 'Name :',
          'chs' : '名称 :'
        },
        'placeholder' : {
          'default' : '请输入经销商名称 例如 ：沈阳施德',
          'eng' : 'Please Type Warehouse Area #, for Example "A01"',
          'chs' : '请输入经销商名称 例如 ：沈阳施德'
        },
        'fieldType' : 'text',
        'required' : true,
      },
      {
        'fieldName' : 'contactPerson',
        'fieldLabel' : {
          'default' : '联系人 :',
          'eng' : 'Tel :',
          'chs' : '联系人 :'
        },
        'placeholder' : {
          'default' : '请输入经销商联系人 例如 张三',
          'eng' : 'Please Type Warehouse Area #, for Example "A01"',
          'chs' : '请输入经销商联系人 例如 张三'
        },
        'fieldType' : 'text',
        'required' : true,
      },
      {
        'fieldName' : 'merchantTel',
        'fieldLabel' : {
          'default' : '电话 :',
          'eng' : 'Tel :',
          'chs' : '电话 :'
        },
        'placeholder' : {
          'default' : '请输入经销商电话 例如 024-7733XXXX',
          'eng' : 'Please Type Warehouse Area #, for Example "A01"',
          'chs' : '请输入经销商电话 例如 024-7733XXXX'
        },
        'fieldType' : 'text',
        'required' : true,
      },
      {
        'fieldName' : 'merchantAddr',
        'fieldLabel' : {
          'default' : '地址 :',
          'eng' : 'Address :',
          'chs' : '地址 :'
        },
        'placeholder' : {
          'default' : '请输入经销商地址 例如 ：沈阳施德',
          'eng' : 'Please Type Warehouse Area #, for Example "A01"',
          'chs' : '请输入经销商地址 例如 ：抚顺市经济开发区'
        },
        'fieldType' : 'textarea',
        'required' : true,
      },
      ]
  }
};

export default function getForms(){
  return forms;
};
