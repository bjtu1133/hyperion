export default function filter(moduleName){

  angular.module(moduleName)
  .filter('exclude', ()=>{
    return (inputArray,exludeArray,id)=>{
      let returnArray = [];
      inputArray.forEach((item)=>{
        if(!exludeArray.includes(item[id])){
          returnArray.push(item);
        }
      });
      return returnArray;
    };
  });
  /*
  * Control how many item is displayed
  */
  angular.module(moduleName)
  .filter('numOfItems', ()=>{
    return (inputArray,num)=>{
      let returnArray = [];
      inputArray.forEach((item,idx)=>{
        if(idx >= num){

          return returnArray;
        }else{
          returnArray.push(item);
        }
      });
      return returnArray;
    };
  });
  console.log('load filter');
}
