import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import I18n from 'react-native-i18n';

import HeaderAd from '../../components/HeaderAd/';
import ItemList from '../../components/ItemList/';

import CommonStyles from '../../styles/CommonStyles';
import Styles from './Styles';

class LocationTypePlace extends PureComponent {
  componentDidMount() {
    this.props.onFetchMap(this.props.language === 'en' ? 'en' : 'rs');
  }

  render() {
    const { items, data } = this.props;

    return (
      <View style={CommonStyles.container}>
        <HeaderAd />
        {
          items ? 
          <ItemList
            header={
              <Text style={Styles.text}>
                {data ? data.description : I18n.t('loading')}
              </Text>
            }
            items={items}
            slug={'/location-single/'}
        />
        : <Text>{I18n.t('loading')}</Text>
        }
      </View>
    );
  }
}

export default LocationTypePlace;
