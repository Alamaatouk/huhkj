 
 $("#optionat").change(function(){
     var a=$( "#optionat" ).val();
    // console.log("a = "+a)
     $("#demo").css("font-size",a) ;
})



$("#optionat1").change(function(){
    var a=$( "#optionat1" ).val();
   // console.log("a = "+a)
    $("#demo").css("font-family",a) ;
})




function bold(){   
$("#demo").css("font-weight","bold") ; }  
    

function italic(){
        if(document.getElementById("demo").style.fontStyle=="normal")
      {  $("#demo").css("font-style","italic")}
        else{document.getElementById("demo").style.fontStyle="normal"}; }

        
function lined(){
    document.getElementById("demo").style.textDecoration="underline"; }
