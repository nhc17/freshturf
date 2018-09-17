/*jslint browser: true */
/*global document $ */

/* hamburger menu */
function drFunction() {
    document.getElementById('dropdownMenu').classList.toggle('show');
}

drFunction();

 $(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    })
  });    