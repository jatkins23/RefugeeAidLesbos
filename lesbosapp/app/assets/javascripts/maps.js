function shelterMapShow (resources){
  handler = Gmaps.build('Google');
  handler.buildMap({ provider: {}, internal: {id: 'shelter_map'}}, function(){
    markers = handler.addMarkers(resources);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
    handler.getMap().setZoom(9);
  });
}

function foodwaterMapShow (resources){
  handler1 = Gmaps.build('Google');
  handler1.buildMap({ provider: {}, internal: {id: 'foodwater_map'}}, function(){
    markers = handler1.addMarkers(resources);
    handler1.bounds.extendWith(markers);
    handler1.fitMapToBounds();
    handler1.getMap().setZoom(9);
  });
}

function medicalMapShow (resources){
  handler2 = Gmaps.build('Google');
  handler2.buildMap({ provider: {}, internal: {id: 'medical_map'}}, function(){
    markers = handler2.addMarkers(resources);
    handler2.bounds.extendWith(markers);
    handler2.fitMapToBounds();
    handler2.getMap().setZoom(9);
  });
}