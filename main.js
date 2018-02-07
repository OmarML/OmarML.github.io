
(function() {
  'use strict';
  let idoftitle = document.getElementById("title");
  let button = document.getElementById("btn1");

  button.addEventListener("click",function(event){
    console.log(`${idoftitle.textContent.trim().split(' ')}`)
  })
})();
