// @flow

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView, Image } from "react-native";
import I18n from "react-native-i18n";
import SvgUri from "react-native-svg-uri";

import HeaderAd from "../../components/HeaderAd/";

import CommonStyles, {
  navHeaderHeight,
  headerAdHeight
} from "../../styles/CommonStyles";
import Styles, { menuHeight } from "./Styles";
import * as Icons from "../../styles/Icons";
import { height as screenHeight } from "../../utils/Screen";

type Props = {
  tags: Array<string>
};
type State = {};

class Locations extends PureComponent<Props, State> {
  render() {
    const { tags } = this.props;
    // caluclate button height for button with icons
    const buttonHeight =
      (screenHeight -
        navHeaderHeight -
        headerAdHeight -
        menuHeight -
        2 * CommonStyles.viewMargin -
        10) /
      Math.floor((tags.length + 1) / 2);

    return (
      <View style={CommonStyles.container}>
        <HeaderAd />
        <View style={Styles.topMenu}>
          <View key="type" style={[Styles.topMenuItem, Styles.withRightBorder]}>
            <Text style={CommonStyles.text}>{I18n.t("type")}</Text>
          </View>
          <View key="place" style={Styles.topMenuItem}>
            <Text style={CommonStyles.text}>{I18n.t("place")}</Text>
          </View>
        </View>
        {/* <ScrollView style={[Styles.scrollView]}> */}
        <View style={Styles.menu}>
          {tags.map((t, index) => (
            <View
              key={index}
              style={[
                Styles.topMenuItem,
                { height: buttonHeight },
                index % 2 === 0 ? Styles.withRightBorder : {}
              ]}
            >
              <SvgUri
                width={50}
                height={45}
                source={Icons[t.replace("-", "")]}
                fill={Icons.colors[t.replace("-", "")]}
              />
              <Text style={CommonStyles.text}>{I18n.t(t)}</Text>
            </View>
          ))}
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

export default Locations;
