var centerPin, map, myLat, myLng, location;
var mapOptions = {
        zoom: 7,
        center: centerPin,
        panControl: true,
        zoomControl: true,
        scaleControl: true
};
function init() {
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        getMyLocation();
}

function getMyLocation() {
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                        myLat = position.coords.latitude;
                        myLng = position.coords.longitude;
                        centerPin = new google.maps.LatLng(myLat, myLng);
                        drawMap();
                });
        } else {
                alert("Your browser does not support geolocation!");
        }
}

function drawMap() {
        map.panTo(centerPin);
        marker = new google.maps.Marker({
                position: centerPin,
                title: "You Are Here",
                icon: "house.png"
        });
        
        google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent("Here you are!");
                infowindow.open(map, marker);
        });
        marker.setMap(map);
        checkButton();
}

function setMarkersAmp(resource) {   
        var infocontent = "<p><strong>Location: </strong>" + <%= resource.location %> +"</p> " + "<p><strong>Name: </strong>" + <%= resource.name %> + 
                          "</p> <p><strong>Hours: </strong>" + <%= resource.hours %> + "</p> <p><strong>Phone: </strong>" + <%= resource.phone %> + "</p>";
            if (<%= resource.category == "Shelter" %>) {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: <%= resource.name %>,
                        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                });
                var infowindow = new google.maps.InfoWindow({
                        content: infocontent
                });
                google.maps.event.addListener(marker, 'click', function() {
                        infowindow.close();
                        infowindow.open(map, marker); 
                });    
                google.maps.event.addListener(marker, 'dblclick', function() {
                        infowindow.close();
                });
                marker.setMap(map);
                return;
            } else if (resource.category == "food_and_water") {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: <%= resource.name %>,
                        icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                });
                var infowindow = new google.maps.InfoWindow({
                        content: infocontent
                });
                google.maps.event.addListener(marker, 'click', function() {
                        infowindow.close();
                        infowindow.open(map, marker); 
                });    
                google.maps.event.addListener(marker, 'dblclick', function() {
                        infowindow.close();
                });
                marker.setMap(map);
                return;
        } else if (resource.category == "medical" {
                var marker = new google.maps.Marker({
                        map: map,
                        position: new google.maps.LatLng(lat,lng),
                        title: <%= resource.name %>,
                        icon: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
                });
                var infowindow = new google.maps.InfoWindow({
                        content: infocontent
                });
                google.maps.event.addListener(marker, 'click', function() {
                        infowindow.close();
                        infowindow.open(map, marker);
                });    
                google.maps.event.addListener(marker, 'dblclick', function() {
                        infowindow.close();
                });
                marker.setMap(map);
                return;
}


function checkButton() {
	$(document).ready(function() {
	    $.ajax({
	        type: "GET",
	        url: <%= resources_path[0] %>,
	        dataType: "text",
	        success: function(data) {console.log(data);
                /*processData(data)*/;}
	     });
	});

	//function processData(allText) {
	    /*var allTextLines = allText.split(/\r\n|\n/);
	    var headers = allTextLines[0].split(',');
	    var lines = [];*/
    //    setMarkersAmp(resources_path[0]);

	    /*for (var i=1; i<allTextLines.length; i++) {
	        var data = allTextLines[i].split(',');
	        if (data.length == headers.length) {

	            var tarr = [];
	            for (var j=0; j<headers.length; j++) {
	                tarr.push(data[j]);
	            }
	            lines.push(tarr);
	        }
	    }
	    for (i = 0; i < lines.length; i++) {
			setMarkersAmp(lines[i][0], lines[i][1], lines[i][2], lines[i][3], lines[i][4]);
		}*/
	//}

	


}

