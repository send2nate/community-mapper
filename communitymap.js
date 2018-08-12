console.log("connected");

$('.fas').click(function (){

		$(this).toggleClass("fa-arrow-circle-left fa-arrow-circle-right");
		$(this).toggleClass("movefas");
		$('.sidenav').toggleClass("sidenavopen");
		$('#nav-enabler').toggleClass("navenableropen");
	
});

