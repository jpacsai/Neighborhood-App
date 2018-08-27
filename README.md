# LastMinute Concerts

**This project is developed for Google/Udacity Front End Web Development Nanodegree (Project 8) as the final capstone project.**  

The aim of the project was to build a single page map application using React and the Google Maps API, integrate a third-party data API and make the app accessible and usable offline. Application state is managed with Redux (wasn't required to complete the project).

***

<p align="center">
  <img src="https://github.com/jpacsai/Neighborhood-App/blob/master/public/img/project1.JPG" width="600" alt="application screenshot"/>
</p>

***
## 📑 Table of Contents
* [Live link](#live-link)
* [Getting started](#getting-started)
* [How to use](#how-to-use)
* [Screenshots](#screenshots)
* [Licence](#licence)
* [Credits](#credits)

## 🔗 Live link  
Open the page directly from [here](https://jpacsai.github.io/Neighborhood-App/)  

## 🏁 Getting started

### Installation  
The system expected to have the following dependencies installed
* Node.js
* npm
* [ yarn ]
* Git

1. Clone [repository](https://github.com/jpacsai/Neighborhood-App)
2. Navigate into project folder and then install dependencies with `npm install`
3. start the server with `npm start` or `yarn start`
4. the aplication runs on http://localhost:3000

### Service Worker  
Service worker is being activated in the production version

**To get a production version either run yarn or npm**  
`yarn build` / `npm run build`

### Built with  
* Google Maps API
* [Ticketmaster Discovery API](https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/)
* [create-react-app](https://www.npmjs.com/package/create-react-app)
* [react-redux](https://www.npmjs.com/package/react-redux)
* [react-day-picker](http://react-day-picker.js.org/)

### Browser compatibility  
The site was tested on Google Chrome only

## 🍴 How to use  
On the initial page load data is requested from the Ticketmaster API for the next 7 days for the Northern England region. Filter labels (location, date) are created from the fetched data.  


The events are displayed in a list in the side menu, where they can be filtered for multiple locations and days plus searched by event name in the search field. Searching / filtering updates the event list and shows only those on the map and adjusting the zoom and center of the map.


On the map venues are displayed, clicking on the marker shows all the events for that venue in the infowindow.  
Hovering on events in the side menu highlights the relevant venue marker on the map, clicking on the event list item centers the map and displays an infowindow with additional details above the venu marker along with a link to Ticketmaster website to purchase tickets and an image of the event.

## 📷 Screenshots
![screenshot2](https://github.com/jpacsai/Neighborhood-App/blob/master/public/img/project2.JPG)
![screenshot3](https://github.com/jpacsai/Neighborhood-App/blob/master/public/img/project3.jpg)
![screenshot4](https://github.com/jpacsai/Neighborhood-App/blob/master/public/img/project4.JPG)

## 📜 Licence

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jpacsai/Neighborhood-App/blob/master/LICENSE) file for details

## 💰 Credits
- Thank you for [Ticketmaster](https://www.ticketmaster.co.uk/) for providing the data
