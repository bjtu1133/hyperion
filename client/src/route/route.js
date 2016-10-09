
export default function route (moduleName){

  let app = angular.module(moduleName)
  app.config(($stateProvider,$urlRouterProvider)=>{

    $urlRouterProvider.otherwise('hyperion');

    $stateProvider.state('hyperion',{
      url : '/hyperion',
      templateUrl: './src/template/hyperion/index.html'
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
  });
}
