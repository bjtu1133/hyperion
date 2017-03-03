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

function inboundAppCtl(ObjectService,StorageService,$scope){


  let testInboundId = 'J1487552724';

  let q = {'objType':'Schedule',
          'idField':'inboundId',
          'idValue':'J1487552724'};


  let ctrl = this;
  console.log(ctrl.params);

  ObjectService.getById(q,(object)=>{
    ctrl.scheduleInfo = object.doc;
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
    console.log(inbound);
    StorageService.createInbound(inbound,()=>{
      console.log('finish');
    });
  }
  $scope.showAddNewItemRow = (itemList) => {
    itemList.addNewItemRowVisible=true;
  }

  console.log(ctrl);
}
