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


    document.getElementById("intro").innerHTML =  "I'm Nahia Akter. Enrolled as a 3rd semester student of Software Engineering Technology at Centennial college. This is a new sector for me and I'm learning everyday."   

})();
