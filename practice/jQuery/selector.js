var selectedID = $("#selectedById"); //by id

var selectedClass = $(".selectedByClass");  //by class

var selectedElement =$("body"); //by element

var selectedAttribute =$('[name="testAttribute"]'); //by attribute

$(document).ready(function(){
	$("#hideIt").click(function(){
	    //$("#selectedById").hide();
		//$(".selectedByClass").hide();
		//$("p.intro").hide();
		//$('ul li:first').hide();
		$('ul li:first-child').hide();
	   }
	);
	$("#hideItAll").click(function(){
		$("*").hide();
	   }
	);
	$('[name="hideMe"]').click(function(){
	     $(this).hide();
	   }
	);
	$('tr:odd').css("background-color","lightgrey");
	$('[name="table"]').click(function(){
		$('tr:even').css("background-color","yellow");
	   }
	);
});

/*$(window).ready(function(){
	$("button").click(
	   function(){
	    $(".selectedByClass").hide();
	   }
	);
});*/

/*$(document).ready(function(){
	$("#hideItAll").click(function(){
		$("*").hide();
	});
});*/
