'use strict'

export default function decStorageApp(moduleName){
  angular.module(moduleName).component('decStorageApp', {
    templateUrl: './src/tool/component/template/dec-storage-app.html',
    controller : 'decStorageAppCtl',
    bindings: {
      attr : '<'
    }
  });
  angular.module(moduleName).controller('decStorageAppCtl',function(ViewDefLoacalStorage){
    let ctrl = this;
    if(ctrl.attr.viewName){
      ctrl.pickerAttr = ctrl.attr.components.listPicker;
      ViewDefLoacalStorage.set('decStorageApp',ctrl.attr);
    }else{
      ctrl.pickerAttr = ViewDefLoacalStorage.get('decStorageApp').components.listPicker;
    }
  });
}
