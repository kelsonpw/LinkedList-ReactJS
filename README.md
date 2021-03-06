# LinkedList Frontend

## Setup Instructions

### Git

1.  Clone the Repo
1.  Change the upstream to your own (`git remote set-url origin <your-repo>`)
1.  `git push -u origin master`

### React

1.  `npm install` to get the dependencies
1.  `npm start` to start webpack on port `3001`
1.  Simultaneously, you must run the backend server on port 3000
## App Structure

### Directories

The app is organized into a few main directories. This is relatively standard. Here's an explanation for each of them:

- `components` - all regular React components go in here in their own folders (see below)
- `containers` - these are Redux containers that contain **only the Redux logic**. Every container imports a React component, which it wraps around and exports with `connect`. These components should never have any render (UI) logic in them. This separation is important for testability and modularization of code.
- `services` - this contains interfaces for external services the app utilizes. Basically, the app hits a backend API. Therefore, the `callAPI` function lives in here. The app also makes use of `localStorage`, so its helper methods live in here as well.
- `store` - anything explicitly Redux-related (aside from connected-components, aka `containers`) lives in here. The `index.js` in here has logic for combining all the reducers into one and adding the thunk / devtools addons to Redux.

### Component Folders

One of the first things you will notice is that everything is basically in its own folder. Every component has a folder, for instance. Here's what goes into a component's folder:

- `index.js` - the main component code here
- `index.test.js` - the Jest / Enzyme tests for the component
- `index.stories.js` - storybook stories for the component (see below)
- `style.css` - CSS styles relating to the component


