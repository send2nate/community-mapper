console.log("connected");

$('.fa').click(function (){

		$(this).toggleClass("fa-arrow-circle-left fa-arrow-circle-right");
		$(this).toggleClass("movefas");
		$('.sidenav').toggleClass("sidenavopen");
		$('#nav-enabler').toggleClass("navenableropen");
	
});

$("#node-layer").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_RecreationNodes_9)) {
        $(this).removeClass('selected');
        map.removeLayer(layer_RecreationNodes_9);
    } else {
        map.addLayer(layer_RecreationNodes_9);        
        $(this).addClass('selected');
   }
});

$("#primary-trail-layer").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_PrimaryTrailway_6) || (map.hasLayer(layer_ProposedDGTrail_8)) ) {
        $(this).removeClass('selected');
        map.removeLayer(layer_PrimaryTrailway_6);
        map.removeLayer(layer_ProposedDGTrail_8);
    } else {
        map.addLayer(layer_PrimaryTrailway_6);
        map.addLayer(layer_ProposedDGTrail_8);        
        $(this).addClass('selected');
   }
});

$("#secondary-trail-layer").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_ProposedSecondaryDGTrail_7)) {
        $(this).removeClass('selected');
        map.removeLayer(layer_ProposedSecondaryDGTrail_7);
    } else {
        map.addLayer(layer_ProposedSecondaryDGTrail_7);        
        $(this).addClass('selected');
   }
});


$(".bike-lane-layer").click(function(event) {
    event.preventDefault();
    if(map.hasLayer(layer_ProposedBikePathClassI_5) || map.hasLayer(layer_ProposedBikeLaneClassII_4) || map.hasLayer(layer_ProposedBikeLaneClassIII_3)) {
        $(this).removeClass('selected');
        map.removeLayer(layer_ProposedBikePathClassI_5);
        map.removeLayer(layer_ProposedBikeLaneClassII_4); 
        map.removeLayer(layer_ProposedBikeLaneClassIII_3);
    } else {
        map.addLayer(layer_ProposedBikePathClassI_5) ;
        map.addLayer(layer_ProposedBikeLaneClassII_4);
        map.addLayer(layer_ProposedBikeLaneClassIII_3);        
        $(this).addClass('selected');
   }
});


// map.on('popupopen', function(e) {
//     var px = map.project(e.popup._latlng); // find the pixel location on the map where the popup anchor is
//     px.y -= e.popup._container.clientHeight/2 // find the height of the popup container, divide by 2, subtract from the Y axis of marker location
//     map.panTo(map.unproject(px),{animate: true}); // pan to new center
// });

