/**
 * This is the main index page for the app
 */

import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";

import rootNavigator from "./components/navigation/rootNavigator"

const AppContainer = createAppContainer(rootNavigator)

type Props = {
  
};

export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}
