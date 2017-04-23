'use strict'

export default function inboundScheduleApp(moduleName){
  angular.module(moduleName).component('inboundApp', {
    templateUrl: './src/tool/component/template/inbound-app.html',
    controller : inboundAppCtl,
    bindings: {
      fieldDef : '<',
      params : '<'
    }
  });
}

function inboundAppCtl(ObjectService,
                    StorageService,
                    ViewDefLoacalStorage,
                    $state,
                    $scope){
  let ctrl = this;

  ctrl.$onInit = ()=>{
    if(!ctrl.fieldDef || !ctrl.fieldDef.viewName){
      let fieldDefInStorage = ViewDefLoacalStorage.get('inBound');
      if(fieldDefInStorage){
        ctrl.fieldDef = fieldDefInStorage;
      }
      else{
        console.log('fieldDef Error');
        return;
      }
    }

    ViewDefLoacalStorage.set('inBound',ctrl.fieldDef);
    //console.log(ctrl.params)
    if(!ctrl.params.inboundId){
      console.log('No InboundScheduleId');
      return;
    }

    ObjectService.getById({
            'objType':'Schedule',
            'idField':'inboundId',
            'idValue': ctrl.params.inboundId
          },(object)=>{
      ctrl.scheduleInfo = object.doc;
      if(!object.doc){
        console.log('No InboundItem Found');
        return;
      }
      if(object.doc.status=='close'){
        console.log('schedule closed');
        return;
      }
      ctrl.inboundItems = object.doc.inboundItems;

      //go through all items, set default value
      Object.values(ctrl.inboundItems)
        .forEach((itemList)=>{
        itemList.forEach((item)=>{
          item.actual = item.amount;
        });
      });

    });
    ctrl.inboundInfo = {}
    ctrl.fieldDef.inboundInfo.fields.inboundId.value
      = ctrl.inboundInfo.inboundId
      = 'I'+((Date.parse(new Date()))/1000);

    $scope.mode = 'edit';

    $scope.review = ()=>{
      $scope.mode = 'review';
    }
    $scope.edit = () =>{
      $scope.mode = 'edit';
    }

    $scope.submit = ()=>{
      let inbound = angular.copy(ctrl.inboundInfo);
      inbound.scheduleId = ctrl.scheduleInfo.inboundId;
      inbound.requestNO = ctrl.scheduleInfo.requestNO;
      inbound.inboundItems = angular.copy(ctrl.inboundItems);
      //console.log(inbound);
      StorageService.createInbound(inbound,()=>{
        $state.go('hyperion.home');
      });
    }
    $scope.showAddNewItemRow = (itemList) => {
      itemList.addNewItemRowVisible=true;
    }
  }


  console.log(ctrl);
}
