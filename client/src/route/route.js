
export default function route (moduleName){

  let app = angular.module(moduleName)
  app.config(($stateProvider,$urlRouterProvider)=>{

    $urlRouterProvider.otherwise('hyperion');

    $stateProvider.state('hyperion',{
      url : '/hyperion',
      templateUrl: './src/template/hyperion/index.html',
      controller : 'hyperionCtl'
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
  });
}
