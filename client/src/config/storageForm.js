let forms = {
  'increase' : {
    'title' : {
      'default' : '进库单',
      'eng' : 'Add Storage',
      'chs' : '进库单'
    },
    'idField' : 0,
    'fields' : [
      {
        'fieldName' : 'storageId',
        'fieldLabel' : {
          'default' : '库存编号 :',
          'eng' : 'Storage # :',
          'chs' : '库存编号 :'
        },
        'placeholder' : {
          'default' : '请输入库存编号 例如 ：SY01',
          'eng' : 'Please Type Storage #, for Example "SY01/AC/FS90832/6666"',
          'chs' : '请输入库存编号 例如 ：SY01'
        },
        'fieldType' : 'text-search',
        'required' : true,
        'optionsConfig' : {
          'objType' : 'Storage',
          'body' : ['storageId'],
          'value' : ['storageId']
        }
      },
      {
        'fieldName' : 'warehouseno',
        'fieldLabel' : {
          'default' : '仓库编号 :',
          'eng' : 'Warehouse # :',
          'chs' : '仓库编号 :'
        },
        'placeholder' : {
          'default' : '请输入仓库编号 例如 ：SY01',
          'eng' : 'Please Type Warehouse #, for Example "SY01"',
          'chs' : '请输入仓库编号 例如 ：SY01'
        },
        'fieldType' : 'text-search',
        'required' : true,
        'optionsConfig' : {
          'objType' : 'Warehouse',
          'header' : ['name',' | ','warehouseno'],
          'body' : ['location'],
          'value' : ['warehouseno']
        }
      },
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
        'fieldType' : 'text-search',
        'required' : true,
        'optionsConfig' :{
          'objType' : 'WarehouseArea',
          'header' : ['warehouseArea'],
          'value' : ['warehouseArea']
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
          'default' : '请输入要添加的型号 例如 ：FS90823',
          'eng' : 'Please Type the Product #, for Example "FS90823"',
          'chs' : '请输入要添加的型号 例如 ：FS90823'
        },
        'fieldType' : 'text-search',
        'required' : true,
        'optionsConfig' : {
          'objType' : 'Product',
          'header' : ['productno'],
          'body' : ['brandName',' | ','size',' | ','feature'],
          'value' : ['productno']
        }
      },
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
        'required' : true,
        'readonly' : true
      },
      {
          'fieldName' : 'period',
          'fieldLabel' : {
            'default' : '周期 :',
            'eng' : 'Period :',
            'chs' : '周期:'
          },
          'placeholder' : {
            'default' : '请输入周期 例如 ：1602',
            'eng' : 'Please Type Period, for Example "1602"',
            'chs' : '请输入周期 例如 ：1602'
          },
          'fieldType' : 'number',
          'required' : true
      },
      {
          'fieldName' : 'from',
          'fieldLabel' : {
            'default' : '货源 :',
            'eng' : 'From :',
            'chs' : '货源:'
          },
          'placeholder' : {
            'default' : '请输入货源 例如 ：沈阳施德',
            'eng' : 'Please Type Where the storage come from, for Example "1602"',
            'chs' : '请输入货源 例如 ：沈阳施德'
          },
          'fieldType' : 'text-search',
          'required' : true,
          'optionsConfig' : {
            'objType' : 'Merchant',
            'header' : ['merchantName'],
            'value' : ['merchantName']
          }
      },
      {
          'fieldName' : 'amount',
          'fieldLabel' : {
            'default' : '数量 :',
            'eng' : 'Amount :',
            'chs' : '数量 :'
          },
          'placeholder' : {
            'default' : '请输入数量 例如 ：100',
            'eng' : 'Please Type Amount, for Example "100"',
            'chs' : '请输入数量 例如 ：100'
          },
          'fieldType' : 'number',
          'required' : true
      },
      {
          'fieldName' : 'operator',
          'fieldLabel' : {
            'default' : '操作员 :',
            'eng' : 'operator :',
            'chs' : '操作员 :'
          },
          'placeholder' : {
            'default' : '请输入操作员 例如 ：张三',
            'eng' : 'Please Type the Operator, for Example "Mike"',
            'chs' : '请输入操作员 例如 ：张三'
          },
          'fieldType' : 'text',
          'required' : true
      }
    ]

  },
  'decrease' : {
    'title' : {
      'default' : '出库单',
      'eng' : 'Decrease Storage',
      'chs' : '出库单'
    },
    'fields' : [
      {
        'fieldName' : 'storageId',
        'fieldLabel' : {
          'default' : '库存编号 :',
          'eng' : 'Storage # :',
          'chs' : '库存编号 :'
        },
        'placeholder' : {
          'default' : '请输入库存编号 例如 ：SY01',
          'eng' : 'Please Type Storage #, for Example "SY01/AC/FS90832/6666"',
          'chs' : '请输入库存编号 例如 ：SY01'
        },
        'fieldType' : 'text-search',
        'required' : true,
        'optionsConfig' : {
          'objType' : 'Storage',
          'body' : ['storageId'],
          'value' : ['storageId']
        }
      },{
        'fieldName' : 'warehouseno',
        'fieldLabel' : {
          'default' : '仓库编号 :',
          'eng' : 'Warehouse # :',
          'chs' : '仓库编号 :'
        },
        'placeholder' : {
          'default' : '请输入仓库编号 例如 ：SY01',
          'eng' : 'Please Type Warehouse #, for Example "SY01"',
          'chs' : '请输入仓库编号 例如 ：SY01'
        },
        'fieldType' : 'text-search',
        'required' : true,
        'readonly' : true,
        'optionsConfig' : {
          'objType' : 'Warehouse',
          'header' : ['name',' | ','warehouseno'],
          'body' : ['location'],
          'value' : ['warehouseno']
        }
      },
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
        'fieldType' : 'text-search',
        'required' : true,
        'readonly' : true,
        'optionsConfig' :{
          'objType' : 'WarehouseArea',
          'header' : ['warehouseArea'],
          'value' : ['warehouseArea']
         }
      },{
        'fieldName' : 'productno',
        'fieldLabel' : {
          'default' : '代码 :',
          'eng' : 'Product # :',
          'chs' : '代码:'
        },
        'placeholder' : {
          'default' : '请输入要添加的型号 例如 ：FS90823',
          'eng' : 'Please Type the Product #, for Example "FS90823"',
          'chs' : '请输入要添加的型号 例如 ：FS90823'
        },
        'fieldType' : 'text-search',
        'required' : true,
        'readonly' : true,
        'optionsConfig' : {
          'objType' : 'Product',
          'header' : ['productno'],
          'body' : ['brandName',' | ','size',' | ','feature'],
          'value' : ['productno']
        }
      },
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
        'required' : true,
        'readonly' : true
      },
      {
          'fieldName' : 'period',
          'fieldLabel' : {
            'default' : '周期 :',
            'eng' : 'Period :',
            'chs' : '周期:'
          },
          'placeholder' : {
            'default' : '请输入周期 例如 ：1602',
            'eng' : 'Please Type Period, for Example "1602"',
            'chs' : '请输入周期 例如 ：1602'
          },
          'fieldType' : 'number',
          'required' : true,
          'readonly' : true
      },
      {
          'fieldName' : 'to',
          'fieldLabel' : {
            'default' : '去向 :',
            'eng' : 'To :',
            'chs' : '去向:'
          },
          'placeholder' : {
            'default' : '请输入去向 例如 ：沈阳施德',
            'eng' : 'Please Type Where the storage come from, for Example "1602"',
            'chs' : '请输入去向 例如 ：沈阳施德'
          },
          'fieldType' : 'text-search',
          'required' : true,
          'optionsConfig' : {
            'objType' : 'Merchant',
            'header' : ['merchantName'],
            'value' : ['merchantName']
          }
      },
      {
        'fieldName' : 'amount',
        'fieldLabel' : {
          'default' : '数量 :',
          'eng' : 'Amount :',
          'chs' : '数量 :'
        },
        'placeholder' : {
          'default' : '请输入数量 例如 ：100',
          'eng' : 'Please Type Amount, for Example "100"',
          'chs' : '请输入数量 例如 ：100'
        },
          'fieldType' : 'number',
          'required' : true
      },
      {
          'fieldName' : 'operator',
          'fieldLabel' : {
            'default' : '操作员 :',
            'eng' : 'operator :',
            'chs' : '操作员 :'
          },
          'placeholder' : {
            'default' : '请输入操作员 例如 ：张三',
            'eng' : 'Please Type the Operator, for Example "Mike"',
            'chs' : '请输入操作员 例如 ：张三'
          },
          'fieldType' : 'text',
          'required' : true
      }
    ]

  }
};
export default function getForms(){
  return forms;
};
