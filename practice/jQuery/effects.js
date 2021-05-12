$(document).ready(function(){
	//Hide/Show
	//toggle(speed,callback),hide(speed,callback),show(speed,callback)---speed:"slow","fast","milliseconds"
    $(".btn1").click(function(){
		$(".intro").hide();
	});
	$(".btn2").click(function(){
		$(".intro").show();
	});
	$(".btn3").click(function(){
		$(".hide").hide(1000);
	});
	$(".btn4").click(function(){
		$("p").toggle("slow");
	});
	
	//Fade
	$(".btn5").click(function(){
		$("#f1").fadeIn();
		$("#f2").fadeIn("slow");
		$("#f3").fadeIn(3000);
	});
	$(".btn6").click(function(){
		$("#f4").fadeOut();
		$("#f5").fadeOut("slow");
		$("#f6").fadeOut(3000);
	});
	$(".btn7").click(function(){
		$("#f7").fadeToggle();
		$("#f8").fadeToggle("slow");
		$("#f9").fadeToggle(3000);
	});
	$(".btn8").click(function(){
		$("#f10").fadeTo("slow", 0.15); //opacity in between 0 to 1. 0- fadeOut, 1-fadeIn.
		$("#f11").fadeTo("slow",0.3);
		$("#f12").fadeTo("slow", 0.6);
	});
	
	//slide
	$("#flip").click(function(){
		$("#panel").slideDown(5000);
	});
	$("#flip1").click(function(){
		$("#panel1").slideUp("slow");
	});
	$("#flip2").click(function(){
		$("#panel2").slideToggle("slow");
	});
	
	//animate({param},speed,callback)
	$(".btn1a").click(function(){
		$("#ani").animate({height:'toggle'}); //show/hide/toggle
	});
	$(".btn1b").click(function(){
		$("#ani1").animate({
			left:'250px',
			opacity:'0.5',
			height:'120px',
			width:'120px'
		});
		
	});
	$(".btn1c").click(function(){
		$("#ani2").animate({
			height:'120px',
			opacity:'0.4',
		},"slow");
		$("#ani2").animate({
			width:'120px',
			opacity:'0.8',
		},"slow");
		$("#ani2").animate({
			height:'60px',
			opacity:'0.4',
		},"slow");
		$("#ani2").animate({
			width:'60px',
			opacity:'0.8',
		},"slow");
		
	});
	$(".btn1d").click(function(){
		$("#ani3").animate({left:'250px'},"slow");
		$("#ani3").animate({fontSize:'3em'},"slow");
	});
	
	//stop(stopAll,goToEnd) --parameters are optional
	$(".btn1e").click(function(){
		$("#panel").stop();
	});
	
	//callback :- A callback function is executed after the current effect is finished.
	$(".btn3").click(function(){
		$(".hide").hide("slow", function(){
			alert("Para is hidden now");
		});
	});
	//without callback:- without finishing the toggle effect alert stmt got executed.
	$(".btn4").click(function(){
		$("p").toggle("slow");
		alert("Para is hidden now");
	});
	
	//chaining
	$(".btnChain").click(function(){
		$("#chain").css("color","red").slideUp(2000).slideDown(2000);
	});
	
	
});