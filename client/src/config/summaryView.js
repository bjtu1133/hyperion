let views = {
  'storageRecordSummary' : {
    'objType' : 'StorageRecord',
    'idField' : 'recordId',
    'fieldType' : 'fieldGroup',
    'displayPrintButton' : true,
    'title' : {
      'default' : '库存变更记录单',
      'eng' : 'Storage Record Form',
      'chs' : '库存变更记录单'
    },
    'fields' : [{
      'fieldName' : 'operation',
      'fieldLabel' : {
        'default' : '操作类型 :',
        'eng' : 'Operation # :',
        'chs' : '操作类型 :'
      },
      'fieldType' : 'property'
    },{
      'fieldName' : 'storage',
      'idField' : 'storageId',
      'objType' : 'Storage',
      'fieldType' : 'propertyGroup',
      'fieldLabel' : {
        'default' : '库存信息 :',
        'eng' : 'Storage Info # :',
        'chs' : '库存信息 :'
      },
      'fields' : [
        {
          'fieldName' : 'storageId',
          'fieldLabel' : {
            'default' : '库存编号 :',
            'eng' : 'Storage # :',
            'chs' : '库存编号 :'
          },
          'fieldType' : 'property'
        },{
          'fieldName' : 'warehouseno',
          'fieldLabel' : {
            'default' : '仓库编号 :',
            'eng' : 'Warehouse # :',
            'chs' : '仓库编号 :'
          },
          'fieldType' : 'property'
        },
        {
          'fieldName' : 'warehouseArea',
          'fieldLabel' : {
            'default' : '库位 :',
            'eng' : 'Area :',
            'chs' : '库位 :'
          },
          'fieldType' : 'property',
        },
        {
          'fieldName' : 'productno',
          'fieldLabel' : {
            'default' : '代码 :',
            'eng' : 'Product # :',
            'chs' : '代码:'
          },
          'fieldType' : 'property',
        },
        {
          'fieldName' : 'brandName',
          'fieldLabel' : {
            'default' : '品牌名称 :',
            'eng' : 'Brand Name :',
            'chs' : '品牌名称:'
          },
          'fieldType' : 'property'
        },
        {
            'fieldName' : 'period',
            'fieldLabel' : {
              'default' : '周期 :',
              'eng' : 'Period :',
              'chs' : '周期:'
            },
            'fieldType' : 'property',
        }
      ]
    },
    {
      'fieldName' : 'from',
      'fieldLabel' : {
        'default' : '货源 :',
        'eng' : 'From :',
        'chs' : '货源 :'
      },
      'fieldType' : 'property'
    },
    {
      'fieldName' : 'to',
      'fieldLabel' : {
        'default' : '去向 :',
        'eng' : 'to :',
        'chs' : '去向 :'
      },
      'fieldType' : 'property'
    },
    {
      'fieldName' : 'amount',
      'fieldLabel' : {
        'default' : '数量 :',
        'eng' : 'Amount :',
        'chs' : '数量 :'
      },
      'fieldType' : 'property'
    },
    {
        'fieldName' : 'operator',
        'fieldLabel' : {
          'default' : '操作员 :',
          'eng' : 'operator :',
          'chs' : '操作员 :'
        },
        'fieldType' : 'property'
    },
    {
      'fieldName' : 'updatedTime',
      'fieldLabel' : {
          'default' : '操作时间 :',
          'eng' : 'Record Time :',
          'chs' : '操作时间 :'
      },
      'fieldType' : 'time'
    }],
  }
}
export default function getViews(){
  return views;
};
