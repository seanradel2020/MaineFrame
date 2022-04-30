![This is an image](/web-src/media/MaineFrame.png)

# MaineFrame
UMaine Connect by MaineFrame, the latest hit startup company

UMaine Connect is a web app for finding events around your area. This app was built to help people find things to do so that they can put their phones down and meet new people.

UMaine Connect currently uses HTML, CSS, and JavaScript. UMaine Connect uses the Firebase and Google Maps API to integrate user authentication, session management, and a map.

## Building The UMaine Connect Docker Container

### Requirements

Have docker installed, a link can be found [here](https://docs.docker.com/get-docker/).

### Build Steps

Download the project to a directory of your choosing.

Browse to the location you saved the project via your terminal.

Once in the directory, type `docker-compose build`.

Next, type `docker-compose up`.

You should now be able to access the website via `localhost:8080` in your web browser.

### API Key
The current API key is only able to be used by UMaine IPs, if you would like to use the website outside of this IP space, you should create your API key.

Replace the API key in the `index.js` and `map_google.js` files.
