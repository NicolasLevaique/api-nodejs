Just a project in NodeJ
=======================

Installation instructions:
--------------------------

1. Install NodeJS in order to download dependencies and serve the API
2. Download the project and go to main folder
3. Use npm install to download dependencies
4. Use node main.js to start the API

Usage:
------

You can go at: http://localhost:8002/v1/charities to retrieve all the existing charities. And you can post a new charity to the same address with the format:
{"name": "a charity name",
 "addresse": {
    "num": 123,
    "road": "a road name",
    "country": "a country name"
  }
}

That's it!

