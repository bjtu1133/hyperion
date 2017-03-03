'use strict'

export default function inboundScheduleApp(moduleName){
  angular.module(moduleName).component('inboundScheduleApp', {
    templateUrl: './src/tool/component/template/inbound-schedule-app.html',
    controller : 'inboundScheduleAppCtl',
    bindings: {
      fieldDef : '<'
    }
  });
  angular.module(moduleName).controller('inboundScheduleAppCtl',
    function(ObjectService,
            ViewDefLoacalStorage,
            StorageService,
            $scope){
    //console.log(this);
    let ctrl = this;

    if(!ctrl.fieldDef || !ctrl.fieldDef.components){
      let fieldDefInStorage = ViewDefLoacalStorage.get('inBoundSchedule');
      if(fieldDefInStorage){
        ctrl.fieldDef = fieldDefInStorage;
      }
      else{
        console.log('fieldDef Error');
        return;
      }
    }

    let fieldDef = ctrl.fieldDef;
    let components = ctrl.fieldDef.components;
    ctrl.generalInfoFieldDef = components.generalInfo;
    ctrl.itemPickerFieldDef = components.itemPicker;
    ctrl.storageBinPickerFieldDef = components.storageBinPicker;
    ctrl.reviewPaneFieldDef = components.reviewPane;
    ctrl.inboundTireIds = [];
    ctrl.inboundItems= {};
    ctrl.generalInfoObject = {};
    ctrl.reviewGeneralInfoObject = {};

    ctrl.generalInfoObject.inboundId
      = ctrl.generalInfoFieldDef.fields.inboundId.value
      = ctrl.reviewGeneralInfoObject.inboundId
      = 'S'+((Date.parse(new Date()))/1000);

    ctrl.onGeneralInfoUpdate = ()=>{
      ctrl.reviewGeneralInfoObject = angular.copy(ctrl.generalInfoObject);
    }

    ctrl.addInboundItems = ()=>{
      console.log(ctrl.inboundItems);
    }

    $scope.inboundItems = ctrl.inboundItems;

    $scope.createInboundSchedule = () => {
      let schedule = angular.copy(ctrl.generalInfoObject);

      schedule.inboundItems = ctrl.inboundItems;
      //console.log(schedule);
      StorageService.createSchedule(schedule,()=>{
        console.log('finish');
      });
      //console.log(ctrl.inboundItems);
    }

    ViewDefLoacalStorage.set('inBoundSchedule',ctrl.fieldDef);
  });
}
