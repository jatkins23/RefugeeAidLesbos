$(document).ready(function(){
  $("#map_trigger").click(function(){
    handler = Gmaps.build('Google');
      handler.buildMap({provider: {}, internal: {id: 'map'}}, function(){
        markers = handler.addMarkers([
          {
            "lat": 39.134358,
            "lng": 26.503097,
            "picture": {
              "url": "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              "width":  32,
              "height": 32
            }
          }
        ]);
        handler.bounds.extendWith(markers);
        handler.getMap().setZoom(10);
        handler.map.centerOn(markers[0]);
      });
  })

})
