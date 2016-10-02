let forms = {
  'increase' : {
    'title' : {
      'default' : '进货单',
      'eng' : 'Add Storage',
      'chs' : '进货单'
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
          'fieldType' : 'text',
          'required' : true
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

    ]

  },
  'decrease' : {
    'title' : {
      'default' : '出货单',
      'eng' : 'Decrease Storage',
      'chs' : '出货单'
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
          'fieldType' : 'text',
          'required' : true
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

    ]

  }
};
export default function getForms(){
  return forms;
};
