"use strict"

let mongoUtil = require("./mongoUtil");

let createInbound = (inbound,cb)=>{
  //console.log("create Inbound");
  mongoUtil.getCollection("Inbound").save(inbound,(err,doc)=>{
    //Close previous schedule
    closeSchedule(inbound,cb);
    increaseStorage(inbound);
    cb(doc);
  });
};

let closeSchedule = (inbound,cb)=>{
  //console.log("close schedule");
  mongoUtil.getCollection("Schedule").update(
    {"inboundId":inbound.scheduleId},{$set:{"status":"close"}});
};

let increaseStorage = (inbound)=>{
  //console.log("increase Storage")

  let storageCol = mongoUtil.getCollection("Storage");
  let inboundItems = inbound.inboundItems;
  let inboundItemList = [];

  let itemCodes = Object.keys(inboundItems);
  for(let i in itemCodes){
    let item = inboundItems[itemCodes[i]];
    for(let j in item){
      inboundItemList.push(item[j]);
    }
  }

  inboundItemList.forEach((item)=>{
    console.log(inbound.inboundId);
    storageCol.update({
      "storageBin" : item.storageBinId,
      "itemCode" : item.itemCode,
      "dot":item.dot
    },
    {
      $inc:{amount : item.actual},
      $set:{lastUpdatedTime : new Date(),
              lastUpdatedBy : inbound.inboundId}
    },
    {
     upsert: true,
     multi: false
   })
  });
};

module.exports = {
  createInbound : createInbound,
  closeSchedule : closeSchedule,
  increaseStorage : increaseStorage
};
