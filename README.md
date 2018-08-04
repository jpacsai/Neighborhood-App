# LastMinute Concerts
This project is developed for Google/Udacity Front End Web Development Nanodegree (Project 8) as the final capstone project.

## Table of Contents

* [Project](#project)
* [Dependencies](#dependencies)
* [Installation](#installation)
* [How to use](#using-the-app)
* [Compatibility](#browser-compatibility)

## Project 
Build a single page map application using React and the Google Maps API. Integrate a third-party data API and make the app accessible and usable offline.

## Installation
The system expected to have the following dependencies installed
* Node.js
* npm
* [ yarn ]
* Git

1. Clone [repository](https://github.com/jpacsai/Neighborhood-App)
2. Navigate into project folder and then install dependencies with `npm install`
3. start the server with `npm start` or `yarn start`
4. the aplication runs on http://localhost:3000

## Dependencies
- Google Maps API
- [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)

## Service Worker
Service worker is being activated in the production version

**To get a production version either run yarn or npm**
`yarn build` / `npm run build`

## Using the app
On the initial page load data is requested from the Ticketmaster API for the next 7 days for the Northern England region. Filter labels (location, date) are created from the fetched data.  
The events are displayed in a list in the side menu, where they can be filtered for multiple locations and days plus searched by event name in the search field. Searching / filtering updates the event list and shows only those on the map.  
On the map venues are displayed, clicking on the marker shows all the events for that venue in the infowindow.  
Hovering on events in the side menu highlights the relevent venue marker on the map, clicking on the event list item centers the map and displays an infowindow with additional details above the venu marker along with a link to Ticketmaster website and an image.

## Browser compatibility
The site was tested on Google Chrome only
