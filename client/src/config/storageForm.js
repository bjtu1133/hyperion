let forms = {
  'add' : {
    'objType' : 'Storage',
    'idField' : 1,
    'title' : {
      'default' : '进货单',
      'eng' : 'Add Storage',
      'chs' : '进货单'
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
      }
    ],

  }
};
export default function getForms(){
  return forms;
};
