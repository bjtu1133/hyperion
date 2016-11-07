'use strict'
import getViews from '../config/summaryView';

export default function storageCtl(ViewService,ObjectService,$location,$stateParams,$scope){

  let viewType = $stateParams.viewType;
  let objId = $stateParams.objId;

  let viewDef = getViews()[viewType];
  let viewStorageObject = {};

  $scope.title = viewDef.title;
  $scope.displayPrintButton = viewDef.displayPrintButton;
  $scope.summary = {};
  $scope.print = ()=>{
    window.print();
  }
  ViewService.buildSummaryObject($scope.summary,viewDef,objId);
}
