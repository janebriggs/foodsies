$(document).ready(function() {
 console.log("hello"); 
 var containers= $(".main-container");
 console.log(containers); 
});

$(document).ready(function() {
    var primero = $("#Appetizers");
    primero.click(function(event) {
        primero.css("color", "red");
        primero.css("font-weight", "bold");
        $(".treat, .dinner").hide();
        $(".apps").show();
        primero.css ("color", "#696969");
        primero.siblings().css("font-weight", "normal");
        $("#Yum").css("font-weight", "normal");
        //gets only the siblings to change, not the element itself
    });
    var segundo = $("#Mains");
    segundo.click(function(event) {
        segundo.css("color", "red");
        segundo.css("font-weight", "bold");
        $(".treat, .apps").hide();
        $(".dinner").show();
        segundo.css ("color", "#696969");
        segundo.siblings().css("font-weight", "normal");
        $("#Yum").css("font-weight", "normal");
    });
    var tercero = $("#Desserts");
    tercero.click(function(event) {
        tercero.css("color", "red");
        tercero.css("font-weight", "bold");
        $(".dinner, .apps").hide();
        $(".treat").show();
        tercero.css ("color", "#696969");
        tercero.siblings().css("font-weight", "normal");
        $("#Yum").css("font-weight", "normal");
    });
    
    var todo = $("#Yum");
    todo.click(function(event) {
        todo.css("font-weight", "bold");
        $(".dinner, .treat, .apps").show();
        $("#Appetizers").css("font-weight", "normal");
        $("#Mains").css("font-weight", "normal");
        $("#Desserts").css("font-weight", "normal");
    })
});

