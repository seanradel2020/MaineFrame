// Initialize and add the map
function initMap() {
  // The location of Uluru
  const fogler = { lat: 44.899490, lng:  -68.669258 };
  //44.899490, -68.669258 fogler library
  // The map, centered at Uluru
  //cca = 44.899422, -68.666359
  const cca = {lat: 44.899422, lng: -68.666359};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: fogler,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: fogler,
    map: map,
  });


  const marker2 = new google.maps.Marker({
    position: cca,
    map: map,
  });
}
