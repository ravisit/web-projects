$(document).ready(function(){
	$("span").click(function(){
		$(this).hide();
	   }
	);
	$("font").css("background-color","lightgrey");
	$("font").dblclick(function(){
		$(this).hide();
	   }
	);
	/*$("#p1").mouseenter(function(){
		alert("You entered another para!");
	   }
	);
	$("p.intro").mouseleave(function(){
		alert("Bye!You leaved para!");
	   }
	);*/
	$("#p1").mousedown(function(){
		//alert("Mousedown over another para!");
	   }
	);
	$("p.intro").mouseup(function(){
		//alert("Mouseup on para!");
	   }
	);
	$("#p1").hover(function(){
		//alert("You entered another para!");
	   },
	   function(){
		   //alert("Bye!You leaved para!");
	   }
	);
	$(".field").focus(function(){
		$(this).css("background-color","yellow");
	   }
	);
	$(".field").blur(function(){
		$(this).css("background-color","white");
	   }
	);
	//on event always comes along with one more event
	$("#p1").on("click", function(){
		$(this).hide();
	  }
	);
	
	//multiple events to one html element
	$("#p2").on({
	    mouseenter:function(){
			$(this).css("background-color","lightgrey");
		},
		mouseleave:function(){
			$(this).css("background-color","lightblue");
		},
		click:function(){
			$(this).css("background-color","yellow");
		}
	});
});