'use strict'
import {printLabel} from '../util';

export default function outboundScheduleApp(moduleName){
  angular.module(moduleName).component('outboundScheduleApp', {
    templateUrl: './src/tool/component/template/outbound-schedule-app.html',
    controller : 'outboundScheduleAppCtl',
    bindings: {
      fieldDef : '<'
    }
  });
  angular.module(moduleName).controller('outboundScheduleAppCtl',
    function(ObjectService,
            ViewDefLoacalStorage,
            StorageService,
            $scope,
            $state){
    //console.log(this);
    let ctrl = this;
    ctrl.$onInit = ()=>{
      if(!ctrl.fieldDef || !ctrl.fieldDef.components){
        let fieldDefInStorage = ViewDefLoacalStorage.get('outboundSchedule');
        if(fieldDefInStorage){
          ctrl.fieldDef = fieldDefInStorage;
        }
        else{
          console.log('fieldDef Error');
          return;
        }
      }
      ViewDefLoacalStorage.set('outboundSchedule',ctrl.fieldDef);

      let fieldDef = ctrl.fieldDef;
      let components = ctrl.fieldDef.components;
      ctrl.generalInfo = components.generalInfo;
      ctrl.storagePicker = components.storagePicker;
      ctrl.outboundSchedule = components.outboundSchedule;

      ctrl.generalInfoObject = {};
      ctrl.generalInfoObject.outboundId
        = ctrl.generalInfo.fields.outboundId.value
        = 'OS'+((Date.parse(new Date()))/1000);

      $scope.mode = 'edit';
      $scope.outboundItems = [];
      $scope.outboundStorageIds =[];

      $scope.review = ()=>{
        $scope.mode = 'review';
      }
      $scope.edit = ()=>{
        $scope.mode = 'edit';
      }
      $scope.createOutboundSchedule = ()=>{
        console.log('abc');
        let schedule = angular.copy(ctrl.generalInfoObject);
        console.log(schedule);
        schedule.outboundItems = $scope.outboundItems;
        StorageService.createOutboundSchedule(schedule,()=>{
          $state.go('hyperion.home');
        });
      };
    }
  });
}
