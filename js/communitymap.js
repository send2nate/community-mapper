console.log("connected");

$('.fa').click(function (){

		$(this).toggleClass("fa-arrow-circle-left fa-arrow-circle-right");
		$(this).toggleClass("movefas");
		$('.sidenav').toggleClass("sidenavopen");
		$('#nav-enabler').toggleClass("navenableropen");
	
});

$("#node-layer").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_RecNodes_10)) {
        $(this).removeClass('selected');
        map.removeLayer(layer_RecNodes_10);
    } else {
        map.addLayer(layer_RecNodes_10);        
        $(this).addClass('selected');
   }
});
