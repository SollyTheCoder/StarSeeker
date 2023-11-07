# Intro

**Star Seeker** is a revolutionary app that calculates the cost of your interstellar journeys, finds efficient routes through a network of gates, and provides detailed gate information.
We've added a "Journey Memory" feature, allowing you to save your favourite routes for future adventures. With a sleek and user-friendly interface, our app ensures a delightful experience. Join us in this mission to redefine the future of travel, one hyperspace jump at a time. The cosmos is calling, and the journey begins with Star Seeker. Start your cosmic adventure now!

## Prerequisites

1. Install nodeJS and follow the React Native setup guide - [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)
2. Clone the repo and CD into the _StarSeeker_ directory
3. In order to run the app, we will need to supply some environment variables so please create a .env file in the root of the project and add the following (replacing with appropriate values):

   .env

   ```
   API_KEY=YOURAPIKEY
   API_ENDPOINT=APIENDPOINT
   ```

4. Run the following commands to start the application
   ```
   npm i
   npx pod-install #(ios specific command)
   npm run start
   ```
   Then select which platform you wish to run the application with

## Getting Started

There are 3 pages to the application:

- Home: provides a view of the hyperspace gates that are available on the network. By clicking on a gate, you can see which gates are directly connected to it and the cost of using that particular transfer service.
- Coster: provides a cost analysis calculator based on 3 parameters: distance to travel, number of passengers and number of parking days. After entering the desired information, you can press _Go!_ and you will be presented with the cheapest means of transport given your desired journey.
- Router: provides a cost analysis view of any 2 gates on the network. After selecting 2 gates, you will be given the most cost effective route between the gates - which sometimes means making more transfers even if a direct route is available.

## Approach

- **Componentisation**
  - Components have been made with TDD in mind by passing variables and callbacks functions to each component. This allows us to isolate the component for testing as we can mock and validate function calls & parameter loading.
- **Navigation**
  - Navigating within the app relies on a bottom navigation component which hosts all 3 screens used. This allows us to neatly define our navigation structure and have good visibility of the navigation stack as a whole.
- **Environment**
  - To avoid prop drilling and git security issues (in the form of committing API keys), I have added a .env file that provides access to environmental constants that are used in the app (API_KEY & API_ENDPOINT).
  - This allows developers to use different setups for the same app and could be used for staging/pre-prod environments as well.
- **Connectivity**
  - API calls are made asynchronously via a re-usable Axios function, which means we don't need to define a new call for every endpoint and we don't need to worry about handling endpoints and tokens within components directly.
- **State & Callbacks**
  - Through a combination of the above, I keep network and data handling at the screen level instead of at the component level. This allows the screen to manage the data available in a singular location.
- **Conventional Commits**
  - The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools. You can read more about this at the [Conventional Commit Website](https://www.conventionalcommits.org/en/v1.0.0/)

## Bonus Tasks

In the master branch I had some time to write some unit tests for the GateInfo and the RouterInput components. Given some more time I would write similar tests for the remaining components and the screens & functions used in the app.

I implemented a simple state persistence for the router page in a separate branch. The method for running the application will be the same and you can make use of the saving functionality by using the _save_ and _delete_ buttons on the router screen.
