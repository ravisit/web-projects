$(document).ready(function(){
	
	//get
   $(".btntext").click(function(){
	   alert('Test: ' + $("#test").text());
   });
   $(".btnhtml").click(function(){
	   alert('HTML: ' + $("#test").html());
   });
   $(".btnshow").click(function(){
	   alert('value: ' + $("#test1").val());
   });
   $(".btnhref").click(function(){
	   alert($("#w3s").attr("href"));
   });
   
   //set
   $("#btntest1").click(function(){
	   $("#test12").text("Hello World!");
   });
   $("#btntest2").click(function(){
	   $("#test2").html("<b>Hello World!</b>");
   });
   $("#btntest3").click(function(){
	   $("#test3").val("John snow");
   });
});