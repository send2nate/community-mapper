console.log("connected");

// function openNav() {
//     document.getElementById("mySidenav").style.width = "350px";
//     document.getElementById("nav-enabler").style.left = "350px";

// }

// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("nav-enabler").style.left = "0px";
// } 

$('.fas').click(function (){

		$(this).toggleClass("fa-arrow-circle-left fa-arrow-circle-right");
		$('.sidenav').toggleClass("openmenu");
		$('.fas').toggleClass("movefas");
		$('#nav-enabler').toggleClass("navenableropen");
	
});

