// @flow

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

import HomeScreen from "../routes/Home";
import NewsScreen from "../routes/News";
import SingleNewsScreen from "../routes/NewsSingle";
import MapScreen from "../components/Map";
import LocationsScreen from "../components/Locations";
import TrailsScreen from "../components/Trails";
import InfoScreen from "../components/Info";
import DonateScreen from "../components/Donate";
import I18n from "react-native-i18n";
import Styles from "../Styles";

import BackButton from "../components/BackButton";
import MenuButton from "../components/MenuButton";

export const AppNavigator = StackNavigator({
  Home: {
    path: "/",
    screen: HomeScreen,
    navigationOptions: navigation => ({
      title: I18n.t("home"),
      headerStyle: Styles.header,
      headerTitleStyle: Styles.headerTitle
    })
  },
  News: {
    path: "/news",
    screen: NewsScreen,
    navigationOptions: navigation => ({
      title: I18n.t("news"),
      headerLeft: <BackButton />,
      headerRight: <MenuButton />,
      headerStyle: Styles.header,
      headerTitleStyle: Styles.headerTitle
    })
  },
  SingleNews: {
    path: "/news/:id",
    screen: SingleNewsScreen,
    navigationOptions: navigation => ({
      title: I18n.t("news"),
      headerLeft: <BackButton />,
      headerRight: <MenuButton />,
      headerStyle: Styles.header,
      headerTitleStyle: Styles.headerTitle
    })
  }
});

const AppWithNavigationState = ({ dispatch, nav, language }) => (
  <AppNavigator
    screenProps={{ language: language }}
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav,
  language: state.settings.language
});

export default connect(mapStateToProps)(AppWithNavigationState);
