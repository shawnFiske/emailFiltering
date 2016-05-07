"use strict";

function filter(list) {
  var emailCache = {};
  var filterEmailList = [];
  //Bench marking
  var start = new Date().getTime();

  console.log('Total email length: ',list.length);

  for(var index = 0; index < list.length; index++) {
    //check if email has been added to cache.
    if(emailCache[list[index]]){
      //console.log('Dup: ', list[index]);
    }else{
      //add email to cache
      emailCache[list[index]] = true;
      //add email to filtered list.
      filterEmailList.push(list[index]);
    }
  }


  var end = new Date().getTime();
  var time = end - start;

  console.log('filtered email length: ', filterEmailList.length)
  console.log('Time: ', time);
  var getBenchmark = function() {
    return {'beginTime': start, 'endTime': end, 'totalTime': time, 'totalEmails': list.length, 'filteredCount': filterEmailList.length};
  }
  //return JSon string with bench mark info
  //return {'beginTime': start, 'endTime': end, 'totalTime': time, 'totalEmails': list.length, 'filteredCount': filterEmailList.length};
  return {'list':filterEmailList, 'benchmark': {'beginTime': start, 'endTime': end, 'totalTime': time, 'totalEmails': list.length, 'filteredCount': filterEmailList.length}};
};



if( typeof exports !== 'undefined' ) {
   if( typeof module !== 'undefined' && module.exports ) {
     exports = module.exports = filter;
   }
   exports.filter = filter;
}else{
   var filter = filter;
}
