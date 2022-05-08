/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import React from 'react';
import {AppNavigator} from './src/navigator';

/**
 * This is the root component of our app.
 */
function App() {
  return <AppNavigator />;
}

export default App;
