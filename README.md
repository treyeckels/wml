The Client portion of this project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Up and Running](#up-and-running)
- [Solution Overview](#solution-overview)
- [Available Scripts](#available-scripts)
  - [yarn client](#yarn-run-client)
  - [yarn server](#yarn-run-server)
  - [yarn dev](#yarn-run-dev)
  - [yarn test-server](#yarn-run-test-server)
  - [yarn test-server](#yarn-run-test-server)
  - [yarn storybook](#yarn-run-storybook)
- [Supported Browsers](#supported-browsers)
- [Formatting Code Automatically](#formatting-code-automatically)

## Up and Running

### Gotchas

1.  Client server and backend server can run together or independently.
2.  Client has its own `package.json` in theory allowing parallel workflows by different teams for the server and client work.

### And Serve...

1.  Clone this respository
2.  From command line run `cd wml && yarn && cd client && yarn && cd ../ && API_KEY={THE_KEY} yarn dev`
3.  From command line run `cd client && yarn storybook` and view Storybook at http://localhost:9001/ to see all available components
4.  Vist http://localhost:5000/graphiql to play with the graphql queries with graphiql. The following link with the query param will get you started quickly:
    http://localhost:5000/graphiql?query=query%20search(%24queryString%3A%20String)%20%7B%0A%20%20search(queryString%3A%20%24queryString)%20%7B%0A%20%20%20%20ids%0A%20%20%20%20totalResults%0A%20%20%20%20products%20%7B%0A%20%20%20%20%20%20itemId%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20salePrice%0A%20%20%20%20%20%20size%0A%20%20%20%20%20%20shortDescription%0A%20%20%20%20%20%20thumbnailImage%0A%20%20%20%20%20%20mediumImage%0A%20%20%20%20%20%20customerRatingImage%0A%20%20%20%20%20%20customerRating%0A%20%20%20%20%20%20categoryPath%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aquery%20product(%24itemId%3A%20ID)%20%7B%0A%20%20product(itemId%3A%20%24itemId)%20%7B%0A%20%20%20%20itemId%0A%20%20%20%20name%0A%20%20%20%20salePrice%0A%20%20%20%20size%0A%20%20%20%20shortDescription%0A%20%20%20%20thumbnailImage%0A%20%20%20%20mediumImage%0A%20%20%20%20customerRatingImage%0A%20%20%20%20customerRating%0A%20%20%20%20categoryPath%0A%20%20%7D%0A%7D%0A%0Aquery%20recommended(%24itemId%3A%20ID)%20%7B%0A%20%20recommended(itemId%3A%20%24itemId)%20%7B%0A%20%20%20%20totalResults%0A%20%20%20%20products%20%7B%0A%20%20%20%20%20%20itemId%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20salePrice%0A%20%20%20%20%20%20size%0A%20%20%20%20%20%20shortDescription%0A%20%20%20%20%20%20thumbnailImage%0A%20%20%20%20%20%20mediumImage%0A%20%20%20%20%20%20customerRatingImage%0A%20%20%20%20%20%20customerRating%0A%20%20%20%20%20%20categoryPath%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aquery%20productWithRecommended(%24itemId%3A%20ID)%20%7B%0A%20%20productWithRecommended(itemId%3A%20%24itemId)%20%7B%0A%20%20%20%20product(itemId%3A%20%24itemId)%20%7B%0A%20%20%20%20%20%20itemId%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20salePrice%0A%20%20%20%20%20%20size%0A%20%20%20%20%20%20shortDescription%0A%20%20%20%20%20%20thumbnailImage%0A%20%20%20%20%20%20mediumImage%0A%20%20%20%20%20%20customerRatingImage%0A%20%20%20%20%20%20customerRating%0A%20%20%20%20%20%20categoryPath%0A%20%20%20%20%7D%0A%20%20%20%20recommended(itemId%3A%20%24itemId)%20%7B%0A%20%20%20%20%20%20totalResults%0A%20%20%20%20%20%20products%20%7B%0A%20%20%20%20%20%20%20%20itemId%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20salePrice%0A%20%20%20%20%20%20%20%20size%0A%20%20%20%20%20%20%20%20shortDescription%0A%20%20%20%20%20%20%20%20thumbnailImage%0A%20%20%20%20%20%20%20%20mediumImage%0A%20%20%20%20%20%20%20%20customerRatingImage%0A%20%20%20%20%20%20%20%20customerRating%0A%20%20%20%20%20%20%20%20categoryPath%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=productWithRecommended&variables=%7B%0A%20%20%22queryString%22%3A%20%22clothes%22%2C%0A%20%20%22itemId%22%3A%20%22219009944%22%0A%7D
5.  Visit http://localhost:3000/ to see the Search Input in the app header (note: clicking on the Walmart Logo/Spark doesn't go back to home because it is a background image. This is annoying to the user and should be fixed so the user can click to go home per normal user expectations.)
6.  Search input will load the search page if the user clicks keyboard `Enter` or clicks/taps search icon
7.  Search can also be initiated by entering a url, such as `http://localhost:3000/search/clothes`
8.  The search results page shows a list of Product Cards that matched search query. Note: There needs to be Verbiage added for when there are no results and better verbiage for when there is an error.
9.  Clicking on one of the Product Cards takes the user to that Product Detail Page (example http://localhost:3000/product/219009944)
10. A list of recommended items based on the currently viewed Product appears to the right or below based on viewport size. Clicking on one of these items loads the Product Page for that Product.
11. Server tests can be run from the CL by executing `yarn test-server` from the app root directory.
12. In theory client tests can be run from the CL by executing `yarn test` from `client` directory.

## Solution Overview

Initially I started with Electrode because I wanted to get to know it and because once I did, I saw how awesome it is and comes with a server implementation, but I eventually went with a very simplistic Express server implementation because of time constraints and because this project didn't need SSR or redux integration.

### Data Fetching

The WM Search and Recommendation APIs come with product details in the JSON. The instructions asked to get the product details from the Product Lookup when the user searches, so the details are are still being fetched from there as follows:

1.  Client makes a Graphql query via Apollo Client to app graphQl endpoint, passing along Search term.
2.  GraphQl endpoint hits WL Search API with the supplied query string. The ids of each of the products are captured and passed as a list to a Product lookup resolver. The Product lookup resolver requests the product details from the Product Lookup API by passing in the list of item ids as a parameter in 1 call. This is done to not hit the Lookup API repeatedly on a per item basis.
3.  On the Product page, a similar workflow is followed except that the Recommendation API is also invoked to populate the Recommended Items list.
4.  For a production GraphQL implementation that involved multiple backend endpoint requests such as described above, I would also implement caching, batch requesting etc. This was done in node, but using a multithreaded language such as Java (or tapping into Node's C base with a plugin) we could make true asynchronous REST API calls that would likely be faster.
5.  I would also implement browser caching at the service worker layer as well to prevent extra payloads from the server, mitigate usage of user mobile data plans, and allow users to continue some searching when their device goes offline.

### Client App Architecture

Because this relies heavily on Material UI and Apollo GraphQl, most of the components I needed to build are 'dumb' functional components without any state managed by custom created components.

1.  `/client/src/public/index.html` is the html entrypoint called by the server.
2.  `/client/src/index.js` loads the app into the DOM.
3.  `/client/src/App.js` is the app entry point. It loads the skeleton (eg the App Header). The main contents are swapped out via the React Router per the browser url.
4.  `/client/src/pages/` contains the views that the Router calls and loads into the main view content area (mentioned above)
5.  `/client/src/components/` contains components shared across the app. They can be seen in Storybook.

### Stacks

#### Client

1.  React built with create-react-app
2.  Material UI https://material-ui.com/ for out of the box components
3.  Walmart Theming via Material UI framework's theming. Overrides theme file is in `client/src/theme`
4.  Data Fetching and Management via Apollo Graph QL https://www.apollographql.com/docs/react/essentials/get-started.html

#### Server

1.  Very simple implementation of an Express web server with Apollo GraphQl Built On top for graphql endpoint
2.  All client queries go through the /graphql endpoint
3.  /graphiql is available as a query sandbox

## Available Scripts

In the app root directory, you can run:

### `yarn client`

Runs the client app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn server`

Launches the graphql server. The API key needs to be passed in: `API_KEY={KEY} yarn server`

### `yarn dev`

Launches both the client and the graphql servers. The API key needs to be passed in: `API_KEY={KEY} yarn dev`

Runs the client app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Runs the graphql app on port `:5000`.
Open [http://localhost:5000/graphiql](http://localhost:5000/graphiql) to view graphiql in the browser.

### `yarn test-server`

Runs graphql server tests, which are located in the `graphql` directory and should be named with the suffix `.serverSpec.js` to be picked up automatically by the test runner.

### `yarn storybook`

Runs the storybook app on port `:9001`.
Open [http://localhost:9001](http://localhost:9001) to view storybook in the browser.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

I confess that I did not check IE or IE Edge but would normally do that.

## Formatting Code Automatically

This project is using [Prettier](https://github.com/prettier/prettier) as well as an `.editorconfig` file.
