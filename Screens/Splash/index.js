import 'react-native-get-random-values';
import React, {Component} from 'react';
// import navigation from 'react-navigation'
import {View, Alert, ImageBackground} from 'react-native';
// Styles
// import RNBootSplash from "react-native-bootsplash";


import styles from './styles';
import {Images} from '../../Themes';

export default class DeatilsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      headerMode: 'none',
    };
  };

  state = {
    selectedTabIndex: 0,
    items: '',
  };

  componentDidMount() {
    // RNBootSplash.hide(); // immediate
    setTimeout(() => {
      this.setTimePassed();
    }, 2000);
  }

  setTimePassed = () => {

    this.props.navigation.replace('Main');
  };
  onBackPress = () => {};
  openLink = (link) => {
    Alert.alert(link);
  };
  render() {
    return (
      <ImageBackground
        resizeMode='cover'
        source={Images.icSplash}
        style={styles.container}
      />
    );
  }
}
