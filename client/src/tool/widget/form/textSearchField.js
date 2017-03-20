'use strict'
export default function textSearchField(moduleName){
  angular.module(moduleName).component('textSearchField', {
    templateUrl: './src/tool/widget/form/template/textSearchField.html',
    controller : 'textSearchFieldCtl',
    bindings: {
      attr : '<'
    }
  });
  angular.module(moduleName).controller('textSearchFieldCtl',function(ObjectService,$scope){
    let ctrl = this;
    let attr = ctrl.attr;
    $scope.fieldLabel = attr.fieldLabel;

    ctrl.$onInit = ()=>{
      if(attr.optionConfig)
        ctrl.loadOptions(attr.optionConfig);
    };

    ctrl.loadOptions = (optionConfig)=>{
      ObjectService.get({'objType':optionConfig.objType},null,(objList)=>{
        $scope.options = objList.map((cur)=>{
          let option = {};
          option.header = mapObjectToStringByArrayKey(cur,optionConfig.header);
          option.body = mapObjectToStringByArrayKey(cur,optionConfig.body);
          option.value = mapObjectToStringByArrayKey(cur,optionConfig.value);
          option.data = cur;
          return option;
        });
      });
    };

    $scope.onOptionSelected = (option)=>{
      $scope.value = option.value;
      $scope.selected = option;
    };
  });
}

function mapObjectToStringByArrayKey(obj,arr){
  return arr.map((key)=>{
    if(obj[key])
      return obj[key];
  }).join(' | ');
}
