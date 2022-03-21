# React-Firebase House MarketPlace App

House MaretPlace (mobile-first) application built with React and Firebase 9. This is a project from Brad Traversy [React Front To Back](https://www.udemy.com/course/react-front-to-back-2022/?referralCode=4A622C7E48DB66154114) course.

## Usage

### Geolocation

The listings use Google geocoding to get the coordinate from the address field. You need to either rename .env.example to .env and add your Google Geocode API key OR in the CreateListing.jsx file you can set geolocationEnabled to "false" and it will add a lat/lng field to the form.

### Run

```bash
npm start
```