// var map;
// var latlng = new google.maps.LatLng(37.571223, 126.977823);
// var stylez = [{
//     featureType: "all",
//     elementType: "all",
//     stylers: [{
//         saturation: -10
//             }]
//         }];
// var mapOptions = {
//     zoom: 15,
//     center: latlng,
//     scrollwheel: false,
//     scaleControl: false,
//     disableDefaultUI: true,
//     mapTypeControlOptions: {
//         mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
//     }
// };
// map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
// var geocoder_map = new google.maps.Geocoder();
// var address = 'Seoul';
// geocoder_map.geocode({
//     'address': address
// }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//         map.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//             map: map,
//             icon: 'img/core-img/map.png',
//             position: map.getCenter()
//         });
//     } else {
//         alert("Geocode was not successful for the following reason: " + status);
//     }
// });
// var mapType = new google.maps.StyledMapType(stylez, {
//     name: "Grayscale"
// });
// map.mapTypes.set('gMap', mapType);
// map.setMapTypeId('gMap');

// function initialize() {
//         var myLatlng;
//         var map;
//         var marker;


//         myLatlng = new google.maps.LatLng(37.571111, 126.977776);  

       
// var mapOptions = {
//                     zoom: 17, 
//                     center: myLatlng,
//                     mapTypeId: google.maps.MapTypeId.ROADMAP,
//                     scrollwheel: false, 
//                     draggable: false
//         };

//         map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        
        
//         var contentString ='<p style="line-height: 20px;">Juice Farm</p><p>강남구 테헤란로 포엠 707</p>'; 

//         var infowindow = new google.maps.InfoWindow({
//                 content: contentString
//         });

//         marker = new google.maps.Marker({
//                 position: myLatlng,
//                 map: map,
//                 title: 'Marker'
//         });

//         infowindow.open(map, marker);

//         google.maps.event.addListener(marker, 'click', function () {
//                 infowindow.open(map, marker);
//         });
// }

// google.maps.event.addDomListener(window, 'load', initialize);



// <script async defer src="https://maps.googleapis.com/maps/api/js? KEY=AIzaSyC-mCm_TuAfwmwXygxU8XCNLkT4YAGdTVE&callback=initMap">
// </script>

