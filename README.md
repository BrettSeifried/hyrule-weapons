# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Plan of attack

    [x] file structure
    [] Build our routes
        [x] make sure pages are connected
        [] Use Switch
        [] URLsearhParams
        [] useParams
        * Pull data from URL
    [] import data
        [] Type of data structure __________
        [] deconstruct data, feed into URL
        [] render fetchData into a page to test
    [x] Header for Home, search.
    [] build out listDisplay
        [] item Card
            [] Id, Image, Name
    [] build item Detail
        [] Id, Name, Image, attack, defense, description, common locations
    [] useHistory to send back after button push
    [] useParams to grab PARAMS from Url
    [] useLocation to grab QUERY params URL
        * key
        * pathname
        *search
        * hash
        * state

## API LINK

<a href=https://botw-compendium.herokuapp.com/api/v2>https://botw-compendium.herokuapp.com/api/v2</a>

    *categories
        * equipment
        * materials
        * monsters
        * treasure
