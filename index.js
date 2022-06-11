// code your solution here
function superbowlWin(record){
    const found = record.find(element => element.result==="W");
    if(found){
        return found.year;
    }
    else if(!found){
      return  undefined;
    }
}
