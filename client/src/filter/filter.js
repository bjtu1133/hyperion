export default function filter(moduleName){
  angular.module(moduleName)
  .filter('pnFilter', ()=>{
    console.log('Filtering');
    return [];
  });
}
