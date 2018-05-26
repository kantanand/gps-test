# GPS Test - ionic 3 google maps
ionic 3 GPS Navigation implementation uisng google maps
![alt text](https://github.com/kantanand/gps-test/raw/master/src/assets/imgs/gmapsicon.png "ionic 3")

**Before we Get Started**

Before you go through this tutorial, you should have at least a basic understanding of Ionic 2 concepts. You must also already have Ionic 2 set up on your machine.

- **Setting up a new Ionic 2 Project**

    To generate a new Ionic 2 project, we can run the following command:<br>
    <code>
        git clone <br>
        cd gps-test <br>
        npm install
    </code>

## Add the JavaScript SDK
To make the JavaScript API available within our application we will need to include the library. You can do so by loading it in your src/index.html file.

Include the Google Maps API in your src/index.html file (above the cordova.js file):
```html 
<script src="http://maps.google.com/maps/api/js?key=YOUR_API_KEY_HERE"></script>
<script src="cordova.js"></script>
```

NOTE: It is also important that you generate an API key for Google Maps and add it to the query string for the 
tag above (replace YOUR_API_KEY_HERE). To generate an API key, just go to [this page](https://developers.google.com/maps/documentation/javascript/get-api-key) and follow the instructions under Get an API key.