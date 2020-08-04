$(function(){

    //ハンバーガーメニュー操作
   
   
       $(window).on('load resize',(function(){
           var w = $(window).width();
           var tab = 768;
           var sp = 375;
   
   
      if(w <= tab && w > sp){
       $("#show").click(function(){
           $("nav").animate({"margin-right":-250},200);
       });
       var dis = -800;
           $("#hide").click(function(){
           $("nav").animate({"margin-right": "+=" + dis + "px"},200);
   
           dis *=1
       });
   
       } else if (w <= sp) {
       $("#show").click(function(){
           $("nav").animate({"margin-right":-250},100);
       });
       var dis =-280;
           $("#hide").click(function(){
           $("nav").animate({"margin-right": "+=" + dis + "px"},200);
   
           dis *=1
       });
   
       } else {
       $("#show").click(function(){
           $("nav").animate({"margin-right":-250},100);
       });
       var dis = -530;
       $("#hide").click(function(){
           $("nav").animate({"margin-right": "+=" + dis + "px"},200);
   
           dis *=1
       });
       }
       } 
       ))
       $("#show").click(function(){
           $("header").fadeIn();
           $("body,html").css({"overflow":"hidden","height":"100%", });
           $("#cover").css({});
       });
       $('#hide').click(function(){
           $('body,html').css({"overflow":"visible","height":"0%","opacity":"1"});
   
       });
   
   
   
   
   })