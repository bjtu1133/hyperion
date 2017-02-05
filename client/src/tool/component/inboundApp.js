'use strict'

export default function inboundApp(moduleName){
  angular.module(moduleName).component('inboundApp', {
    templateUrl: './src/tool/component/template/inbound-app.html',
    controller : 'inboundAppCtl',
    bindings: {
      fieldDef : '<'
    }
  });
  angular.module(moduleName).controller('inboundAppCtl',function(ObjectService){
    let ctrl = this;
    if(!ctrl.fieldDef || !ctrl.fieldDef.components){
      console.log('error');
    }else{
        let fieldDef = ctrl.fieldDef;
        let components = ctrl.fieldDef.components;
        ctrl.generalInfoFieldDef = components.generalInfo;
        ctrl.itemPickerFieldDef = components.itemPicker;
        ctrl.storageBinPickerFieldDef = components.storageBinPicker;
        ctrl.inboundTireIds = [];
        ctrl.inboundItems= {};
        ctrl.addInboundItems = ()=>{
          console.log(ctrl.inboundItems);
        }
    }

  });
}
