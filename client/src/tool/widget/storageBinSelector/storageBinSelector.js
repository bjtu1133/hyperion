export default function(moduleName){
  angular.module(moduleName)
  .component('storageBinSelector', {
    templateUrl: './src/tool/widget/storageBinSelector/template/storage-bin-selector.html',
    controller: storageBinSelectorCtl,
    bindings:{
      fieldDef : '<',
      inboundItemInfo : '<',
      inboundItems : '<',
      onComplete : '&'
    }
  });
}

function storageBinSelectorCtl(ObjectService,$scope){
  let ctrl = this;
  ctrl.scheduleNumByDotDetail = {};
  $scope.SCHEDULE_NUM_BY_DOT_FORM_NAME = "scheduleNumByDotForm";
  $scope.scheduleNumByDot = {};
  $scope.storageBinList = [];
  $scope.numOfItems = 3;
  $scope.showRecommandations = false;
  $scope.complete = false;
  /*
  * Check if scheduleNumByDotForm is ready
  */
  $scope.scheduleNumByDotReady = ()=>{
    return (Object.keys($scope.scheduleNumByDot).length>0)
  };
  /*
  * Remove item from scheduleNumByDot
  */
  $scope.removeItem = (object,key)=>{
    $scope.clearRecommandations();
    delete object[key];
  }
  /*
  * Add new InboundNumByDotDetail, clear scheduleNumByDotForm
  */
  $scope.addInboundNumByDotDetail = ()=>{
    $scope.clearRecommandations();
    if(!ctrl.scheduleNumByDotDetail.dot){
      return;
    }
    $scope.scheduleNumByDot[ctrl.scheduleNumByDotDetail.dot]={
      dot : ctrl.scheduleNumByDotDetail.dot,
      scheduleAmount : ctrl.scheduleNumByDotDetail.scheduleAmount,
      scheduleRemain : ctrl.scheduleNumByDotDetail.scheduleAmount
    };
    document.getElementById($scope.SCHEDULE_NUM_BY_DOT_FORM_NAME).reset();
  };
  /*
  * recommand storage bins
  */
  $scope.storageBinRecommandation = ()=>{
    $scope.storageBinList = ObjectService.query({'objType':'StorageBin'},{});
    $scope.showRecommandations = true;
  };
  /*
  * Clear Recommandations
  */
  $scope.clearRecommandations = ()=>{
    $scope.storageBinList = [];
    $scope.showRecommandations = false;
  };
  /*
  * Complete Inbound Item
  */
  $scope.completeInboundItems = ()=>{
    let itemList = [];
    for(let i = 0; i < $scope.storageBinList.length ; i++){
      let storageBinItem = $scope.storageBinList[i];
      if( storageBinItem && storageBinItem.scheduleAmount>0)
      itemList.push({
        dot : storageBinItem.dot,
        amount : storageBinItem.scheduleAmount,
        storageBinId : storageBinItem.id,
        itemCode : ctrl.inboundItemInfo.itemCode,
        brand : ctrl.inboundItemInfo.brand,
        size : ctrl.inboundItemInfo.size,
        model : ctrl.inboundItemInfo.model
      });
    }

    ctrl.inboundItems[ctrl.inboundItemInfo.itemCode]=itemList;
    ctrl.onComplete();
    ctrl.clear();
    $scope.complete = true;
    $scope.itemList = itemList;
  };
  /*
  *Reset everything
  */
  $scope.reset = ()=>{
    $scope.complete = false;
    $scope.itemList.splice(0,$scope.itemList.length);
  }

  ctrl.clear = ()=>{
    $scope.storageBinList = [];
    $scope.clearRecommandations();
    $scope.scheduleNumByDot={};
    ctrl.scheduleNumByDotDetail = {};
  }

  console.log(ctrl);
}
