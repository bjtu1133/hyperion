'use strict'

export function printLabel(item,cfg){
  let label='';

  for (let i in cfg){
    let str = (cfg[i] == 'date') ?
      parseDate(item[cfg[i]]):item[cfg[i]];
    label += (label.length>0) ? ' | ' +str : str;
  }
  return label;
};

export function parseDate (date){
  if(date)
    return new Date(date).toLocaleDateString();
};
