let forms = {
  'storageDashboard' : {
    'title' : {
      'default' : '',
      'eng' : 'Add Storage',
      'chs' : '进货单'
    },
    'resourceFieldsKeys' : [
      'storageId', 'productno', 'brandName', 'period','warehouseno','location','amount','lastUpdatedTime'
    ],
    'headers' : [
      {
        'default' : '库存编号 :',
        'eng' : 'Storage # :',
        'chs' : '库存编号 :'
      },
      {
        'default' : '轮胎代码 :',
        'eng' : 'Product # :',
        'chs' : '轮胎代码 :'
      },
      {
        'default' : '品牌 :',
        'eng' : 'Brand :',
        'chs' : '品牌:'
      },
      {
          'default' : '周期 :',
          'eng' : 'Period :',
          'chs' : '周期:'
      },
      {
        'default' : '仓库 :',
        'eng' : 'Warehouse no:',
        'chs' : '仓库:'
      },
      {
        'default' : '库位 :',
        'eng' : 'Location:',
        'chs' : '库位:'
      },
      {
          'default' : '数量 :',
          'eng' : 'Amount :',
          'chs' : '数量 :'
      },
      {
          'default' : '最近更新时间 :',
          'eng' : 'Last Updated By :',
          'chs' : '最近更新时间 :'
      }
    ]
  }
};
export default function getForms(){
  return forms;
};
