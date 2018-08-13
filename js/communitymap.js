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

$("#primary-trail-layer").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_MCP_PrimaryTrailway10_7)) {
        $(this).removeClass('selected');
        map.removeLayer(layer_MCP_PrimaryTrailway10_7);
    } else {
        map.addLayer(layer_MCP_PrimaryTrailway10_7);        
        $(this).addClass('selected');
   }
});

$("#secondary-trail-layer").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_MCP_ProposedSecondaryDGTrail_8)) {
        $(this).removeClass('selected');
        map.removeLayer(layer_MCP_ProposedSecondaryDGTrail_8);
    } else {
        map.addLayer(layer_MCP_ProposedSecondaryDGTrail_8);        
        $(this).addClass('selected');
   }
});


$(".bike-lane-layer").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_MCP_ProposedBikePathClassI_6) || map.hasLayer(layer_MCP_BikeLaneClassII_3) || map.hasLayer(layer_MCP_BikeLaneClassIII_2)) {
        $(this).removeClass('selected');
        map.removeLayer(layer_MCP_ProposedBikePathClassI_6);
        map.removeLayer(layer_MCP_BikeLaneClassII_3); 
        map.removeLayer(layer_MCP_BikeLaneClassIII_2);
    } else {
        map.addLayer(layer_MCP_ProposedBikePathClassI_6) ;
        map.addLayer(layer_MCP_BikeLaneClassII_3);
        map.addLayer(layer_MCP_BikeLaneClassIII_2);        
        $(this).addClass('selected');
   }
});


