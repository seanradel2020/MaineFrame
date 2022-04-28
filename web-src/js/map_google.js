// Initialize and add the map
function initMap() {
    // The location of Uluru
    const fogler = { lat: 44.899490, lng:  -68.669258 };
    const label1 = "COS420 Study Session";
    const label2 = "Campus Cares";
    const label3 = "Chili at the Union";
    //44.899490, -68.669258 fogler library
    // The map, centered at Uluru
    //cca = 44.899422, -68.666359
    const union = { lat: 44.89969378472022, lng:  -68.66782928430455 };
    const mall = {lat: 44.901380, lng:  -68.669706};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      mapTypeID: 'satellite',
      center: fogler,
    });

    const marker = new google.maps.Marker({
      position: fogler,
      map: map,
      label: {
        text: label1,
        color: 'black',
        fontSize: "20px",
        fontWeight: "bold"
      }
    });

    const marker3 = new google.maps.Marker({
      position: union,
      map: map,
      label: {
        text: label3,
        color: 'black',
        fontSize: "20px",
        fontWeight: "bold"
      }
    });


    const marker2 = new google.maps.Marker({
      position: mall,
      map: map,
      label: {
        text: label2,
        color: 'black',
        fontSize: "20px",
        fontWeight: "bold"
      }
    });
  }
