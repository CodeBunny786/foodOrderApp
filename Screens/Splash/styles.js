import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, scale, Colors, Fonts} from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    // backgroundColor: Colors.primary,
    
  },

  backImage: {
    height: 30,
    width: 30,
    position: 'absolute',
    left: 10,
    top: 40,
    tintColor: '#FFFF',
  },
});
