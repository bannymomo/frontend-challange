# Next To Go Web

This is a single page application that displays 'Next to go' races using given API

## Frameworks / Tools

- React.js
- Ant-Design
- Typescript
- Jest

## Function Description

A user could see 5 races sorted by time ascending at all times.
When a race start, the "Time Left" field of this single record will show "Started".
Race disappear from the list after 1 min past the start time.

User could see meeting name, race number and countdown timer that indicates the start of the race.
User could click single race item to see more race detail(desktop only).

User could toggle race categories to view races belonging to only the selected category(support multi select).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run test`

Run all tests.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Considerations / Improvements

- In order to allow users to see 5 pieces of data at any time, the design idea of the program is that when the data length is less than 5, new data will be automatically fetch from API. But when the user uses filter to filter the racing game, due to data limitations, the display may be less than 5.

- Because the program is small, react context is selected for state management, and redux will be considered if it is complicated.

- Due to time constraints, this program only wrote a few representative unit tests. Later integration tests can also be added, for example, when the user clicks on a race item, program can auto test whether this race details are displayed.

- Eslint should be added to standardize the code format.

- Better UI/UX design.

- Responsiveness can be improved.

- Distinguish between development and production environments in setup.
