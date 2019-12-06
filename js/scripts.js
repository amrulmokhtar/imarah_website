

// jquery smooth scroll
$('a').smoothScroll();

// change text for monthly plans

$("#switchPayment").click(function(){

	if($("#switchPayment").hasClass("annual")){

		$("#premiumPlan").text("RM 50 / bln");
		$("#premiumPlanNote").text("Apabila dibayar secara bulanan");
		$("#switchPayment").text("Tunjukkan bayaran secara tahunan");
		$("#switchPayment").removeClass("annual");

	}
	else{

		$("#premiumPlan").text("RM 42 / bln");
		$("#premiumPlanNote").text("Apabila dibayar secara tahunan");
		$("#switchPayment").text("Tunjukkan bayaran secara bulanan");
		$("#switchPayment").addClass("annual");
		
	}
	

});