
export default function route (moduleName){

  let app = angular.module(moduleName)
  app.config(($stateProvider,$urlRouterProvider)=>{

    $urlRouterProvider.otherwise('hyperion/home');

    $stateProvider.state('hyperion',{
      url : '/hyperion',
      templateUrl: './src/template/hyperion/index.html',
      controller : 'hyperionCtl'
    });

    $stateProvider.state('hyperion.home',{
      url : '/home',
      templateUrl : './src/template/hyperion/home.html',
      controller : 'baseCtl',
      resolve : {
        data : function(ViewDefService){
          return ViewDefService.get({'viewName':'homePage'});
        }
      }
    });

    $stateProvider.state('hyperion.addNew',{
      url : '/add/:formType',
      templateUrl : './src/template/form/addNew.html',
      controller : 'addNewCtl'
    });

    $stateProvider.state('hyperion.storage',{
      url : '/storage/:formType',
      templateUrl : './src/template/form/addNew.html',
      controller : 'storageCtl'
    });

    $stateProvider.state('hyperion.list',{
      url : '/list/:formType',
      templateUrl : './src/template/form/listView.html',
      controller : 'listCtl'
    });

    $stateProvider.state('hyperion.summary',{
      url : '/summary/:viewType/:objId',
      templateUrl : './src/template/view/summary.html',
      controller : 'summaryCtl'
    });

    $stateProvider.state('hyperion.decStorage',{
      url : '/decStorage',
      templateUrl : './src/template/form/decStorage.html',
      controller : 'baseCtl',
      resolve : {
        data : function(ViewDefService){
          return ViewDefService.get({'viewName':'decStorageApp'});
        }
      }
    });
    $stateProvider.state('hyperion.inboundScheduleApp',{
      url : '/inboundScheduleApp',
      templateUrl : './src/template/app/inbound-schedule-app.html',
      controller : 'baseCtl',
      resolve : {
        data : function(ViewDefService){
          return ViewDefService.get({'viewName':'inboundScheduleApp'});
        }
      }
    });
    $stateProvider.state('hyperion.inboundApp',{
      url : '/inboundApp',
      params : {inboundId : null},
      templateUrl : './src/template/app/inbound-app.html',
      controller : 'baseCtl',
      resolve : {
        data : function(ViewDefService){
          return ViewDefService.get({'viewName':'inboundApp'});
        }
      }
    });
    $stateProvider.state('hyperion.outboundScheduleApp',{
      url : '/outboundScheduleApp',
      templateUrl : './src/template/app/outbound-schedule-app.html',
      controller : 'baseCtl',
      resolve : {
        data : function(ViewDefService){
          return ViewDefService.get({'viewName':'outboundScheduleApp'});
        }
      }
    });
    $stateProvider.state('hyperion.outboundApp',{
      url : '/outboundApp',
      params : {outboundId : null},
      templateUrl : './src/template/app/outbound-app.html',
      controller : 'baseCtl',
      resolve : {
        data : function(ViewDefService){
          return ViewDefService.get({'viewName':'outboundApp'});
        }
      }
    });
  });
}
