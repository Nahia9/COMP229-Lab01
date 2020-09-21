/* Author: Nahia Akter
   Date  : 20/09/2020
   Description: JavaScript file for html page
*/
(function(){

    function Start()
    {
        console.log('%cApp Started...', "color:white; font-size: 24px;");   

       let title = document.title;

       title = title.toLowerCase();

       console.log(`The title of the page is ${title}`);

    }
    
    window.addEventListener("load", Start);


    document.getElementById("intro").innerHTML =  "I'm Nahia Akter. You can call me Nahia. This is a new sector for me and I'm learning everyday."   

})();
