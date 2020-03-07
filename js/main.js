/****
ERRA MAIN JS FILE
Author: Aurora Widawati
Date Created: 17/02/2020
Date Modified: 17/02/2020
*****/

/** Scroll action **/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/** Scrollspy **/
$('body').scrollspy({ target: '#myTopnav' })
