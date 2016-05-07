"use strict";

function processEmails() {
  var emails = [];
  var numEmails = 50000;

  for(var count = 0; count < numEmails; count++) {
    var email = makeEmail();

    emails.push(email);
    emails.push(email);
  }

  return shuffle(emails);
};

function shuffle(list) {
    var counter = list.length;

    while (counter > 0) {

        var index = Math.floor(Math.random() * counter);

        counter--;

        var temp = list[counter];
        list[counter] = list[index];
        list[index] = temp;
    }

    return list;
}

function makeEmail() {
    var strValues="abcdefg12345";
    var strEmail = "";
    var strTmp;
    for (var name = 0; name < 8; name++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }

    strTmp = "";
    strEmail = strEmail + "@";
    for (var address = 0; address < 8 ; address++) {
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random()));
        strEmail = strEmail + strTmp;
    }

    strEmail = strEmail + ".com"
    return strEmail;
}

if( typeof exports !== 'undefined' ) {
   if( typeof module !== 'undefined' && module.exports ) {
     exports = module.exports = processEmails;
   }
   exports.processEmails = processEmails;
}else{
   var processEmails = processEmails;
}
