'use strict'

export default function outboundScheduleApp(moduleName){
  angular.module(moduleName).component('outboundApp', {
    templateUrl: './src/tool/component/template/outbound-app.html',
    controller : outboundAppCtl,
    bindings: {
      fieldDef : '<',
      params : '<'
    }
  });
}

function outboundAppCtl(ObjectService,
                    StorageService,
                    ViewDefLoacalStorage,
                    $state,
                    $scope){
  let ctrl = this;

  ctrl.$onInit = ()=>{
    if(!ctrl.fieldDef || !ctrl.fieldDef.viewName){
      let fieldDefInStorage = ViewDefLoacalStorage.get('outBound');
      if(fieldDefInStorage){
        ctrl.fieldDef = fieldDefInStorage;
      }
      else{
        console.log('fieldDef Error');
        return;
      }
    }

    ViewDefLoacalStorage.set('outBound',ctrl.fieldDef);

    if(!ctrl.params.outboundId){
      console.log('No OutBoundScheduleID');
      return;
    }
    //Load OutboundItems
    ctrl.outboundItems = [];
    ctrl.leftOverItems = [];
    ObjectService.getById({
            'objType':'OutboundSchedule',
            'idField':'outboundId',
            'idValue': ctrl.params.outboundId
          },(object)=>{
      ctrl.scheduleInfo = object.doc;
      if(!object.doc){
        console.log('No OutboundItem Found');
        return;
      }
      if(object.doc.status=='close'){
        console.log('schedule closed');
        return;
      }

      object.doc.outboundItems.forEach((item)=>{
        ctrl.outboundItems.push(item);
      });

    });
  }

  $scope.mode = 'edit';
  $scope.review = () => {
    $scope.mode = 'review';
  }
  $scope.edit = ()=>{
    $scope.mode = 'edit';
  }
  $scope.submit = ()=>{
    $state.go('hyperion.home');
  }

}
