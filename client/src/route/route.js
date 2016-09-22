
export default function route (moduleName){

  let app = angular.module(moduleName)
  app.config(($stateProvider,$urlRouterProvider)=>{

    $urlRouterProvider.otherwise('hyperion');

    $stateProvider.state('hyperion',{
      url : '/hyperion',
      templateUrl: './src/template/hyperion/index.html',
      //controller : 'hyperionIndexController'
    });

    $stateProvider.state('hyperion.addNew',{
      url : '/add/:formType',
      templateUrl : './src/template/addNew/index.html',
      controller : 'addNewCtl'
    });
  });
}
