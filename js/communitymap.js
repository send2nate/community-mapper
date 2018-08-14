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


map.on('popupopen', function(e) {
    var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
    px.y -= e.popup._container.clientHeight/2 // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
    map.panTo(map.unproject(px),{animate: true}); // pan to new center
});

