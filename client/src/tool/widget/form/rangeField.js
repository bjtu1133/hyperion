'use strict'
export default function rangeField(moduleName){
  angular.module(moduleName).component('rangeField', {
    templateUrl: './src/tool/widget/form/template/rangeField.html',
    controller : 'rangeFieldCtl',
    bindings: {
      attr : '<'
    }
  });
  angular.module(moduleName).controller('rangeFieldCtl',function($scope){
    let ctrl = this;
    let attr = ctrl.attr;
    let fields = $scope.fields = attr.fields;

    $scope.label = attr.label;
    $scope.onChange = ()=>{
      attr.value = [];
      if(fields.from.value){
        attr.value.push(fields.from.value);
      }
      if(fields.to.value){
        attr.value.push(fields.to.value);
      }
    }
  });
}
