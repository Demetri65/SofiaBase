# Getting Started with SofiaBase

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

To get the project running on your local machine please follow the listed directions

### Download Node.js (https://nodejs.org/en/download/)

You must download this to get npm which a javascript package manager.

### `npm install -g yarn` in Terminal

This will download yarn which is used for running the application locally. Refer to the Available Scripts section once you have finished installation.

### `yarn install` in Project Folder

Use the command `yarn install` in the base directory of the git repo to download all the dependencies.

### `cd api/` 

cd into the api folder of your local project location and directory.

### `python3 -m venv venv` 

Use this command to create a python virtual environment. YOUR PYTHON VIRTUAL ENV MUST BE NAMED `venv`!

### `source venv/bin/activate` 

Use this command to activate your python virtual environment.\
You should see `(venv) $ _` at the start of your terminal commands.

### `pip install flask python-dotenv` 

This command downloads flask and python-dotenv as dependencies for the flask project.\
More dependencies will by added if needed to repsective parts of the project as we move forward.

### NOTES

Your python virtual environment should be INSIDE the `sofiabase/api` folder.\
It will show up as a folder called `sofiabase/api/venv`.

Also when you are done using the virtual environment simply type `deactivate` to leave the virtual environment. Although you will need to reactivate it using the `source venv/bin/activate` command shown above. You must also be in the api folder when activating the virtual environment because it stays here on your local environment.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start-api`

Runs the flask api on the local host server.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

Note: for the react front end to dynamically change to any data processed in the backend both `yarn start` and `yarn start-api` must both be ran in seperate terminals. 

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


