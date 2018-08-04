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

## Before installation
The system expected to have the following dependencies installed
* Node.js
* npm
* [ yarn ]
* Git

## Installation
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
The inital page shows 3 shelves of books (Currently Reading, Want To Read, Read). The user can change the status of a book on the shelf to one of the three types mentioned above or to none to remove it.

In the search page the user can type into the input form to search for books and add them to one of the three shelves or to move them to another shelf.

## Browser compatibility
The site was tested on Google Chrome only
