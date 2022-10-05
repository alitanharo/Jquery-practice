$(document).ready(function () {

   

        

 
   $("button").on("click",function(){


       var list = $("ul").text()
       console.log(list);


    
    $("#result").append(list);
       $(this).css("color", "red")
  });





});