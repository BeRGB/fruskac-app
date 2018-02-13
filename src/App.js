/**
 * @flow
 */

import React, { Component } from "react";

import MapBox from "@mapbox/react-native-mapbox-gl";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "./I18n/I18n"; // keep before RootContainer

import configureStore from "./store/configureStore";
import AppWithActions from "./AppWithActions";

MapBox.setAccessToken(
  "pk.eyJ1IjoiYWxleGd2b3pkZW4iLCJhIjoiY2pjN2tvM2p1MGV0dzJ3bzcwNzRpNnZ1MyJ9.6vel6zy35B2t9dB3VywO9g"
);

// Store & Router
const store = configureStore({});
const persistor = persistStore(store);
persistor.flush();

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppWithActions />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
