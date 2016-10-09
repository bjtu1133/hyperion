let forms = {
  'storageDashboard' : {
    'objType' : 'Storage',

    'fieldsKeys' : [
      'storageId', 'productno', 'brandName', 'period', 'warehouseno', 'location', 'amount', 'lastUpdatedTime'
    ],
    'fields' : {
      'storageId' : {
        'label' : {
          'default' : '库存编号 :',
          'eng' : 'Storage # :',
          'chs' : '库存编号 :'
        },
        'type' : 'text'
      },
      'productno' : {
        'label' : {
          'default' : '轮胎代码 :',
          'eng' : 'Product # :',
          'chs' : '轮胎代码 :'
        },
        'type' : 'text'
      },
      'brandName' : {
        'label' : {
          'default' : '品牌 :',
          'eng' : 'Brand :',
          'chs' : '品牌:'
        },
        'type' : 'text'
      },
      'period' : {
        'label' : {
            'default' : '周期 :',
            'eng' : 'Period :',
            'chs' : '周期:'
        },
        'type' : 'text'
      },
      'warehouseno' : {
        'label' : {
          'default' : '仓库 :',
          'eng' : 'Warehouse no:',
          'chs' : '仓库:'
        },
        'type' : 'text'
      },
      'location' : {
        'label' : {
          'default' : '库位 :',
          'eng' : 'Location:',
          'chs' : '库位:'
        },
        'type' : 'text'
      },
      'amount' : {
        'label' : {
            'default' : '数量 :',
            'eng' : 'Amount :',
            'chs' : '数量 :'
        },
        'type' : 'text'
      },
      'lastUpdatedTime' : {
        'label' : {
            'default' : '最近更新时间 :',
            'eng' : 'Last Updated By :',
            'chs' : '最近更新时间 :'
        },
        'type' : 'Time'
      }
    }
  },

  'storageRecordDashboard' : {
    'objType' : 'StorageRecord',

    'fieldsKeys' : [
      'storageId', 'operation', 'amount', 'updatedTime', 'warehouseno', 'location', 'operator'
    ],
    'fields' : {
      'storageId' : {
        'label' : {
          'default' : '库存编号 :',
          'eng' : 'Storage # :',
          'chs' : '库存编号 :'
        },
        'type' : 'text'
      },
      'operation' : {
        'label' : {
          'default' : '操作 :',
          'eng' : 'Operation # :',
          'chs' : '操作 :'
        },
        'type' : 'text'
      },
      'amount' : {
        'label' : {
          'default' : '数量 :',
          'eng' : 'Amount :',
          'chs' : '数量:'
        },
        'type' : 'text'
      },
      'updatedTime' : {
        'label' : {
            'default' : '记录时间 :',
            'eng' : 'Time :',
            'chs' : '记录时间:'
        },
        'type' : 'Time'
      },
      'warehouseno' : {
        'label' : {
          'default' : '仓库 :',
          'eng' : 'Warehouse no:',
          'chs' : '仓库:'
        },
        'type' : 'text'
      },
      'location' : {
        'label' : {
          'default' : '库位 :',
          'eng' : 'Location:',
          'chs' : '库位:'
        },
        'type' : 'text'
      },
      'operator' : {
        'label' : {
            'default' : '操作员 :',
            'eng' : 'Operator :',
            'chs' : '操作员 :'
        },
        'type' : 'text'
      }
    }
  },
};
export default function getForms(){
  return forms;
};
