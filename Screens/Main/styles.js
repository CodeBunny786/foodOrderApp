import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles, scale, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: '#b6bbb7'

  },
  linearGradient: {


  },

  backImage: {
    height: 30,
    width: 30,
    position: 'absolute',
    left: 10,
    top: 40,
    tintColor: '#333',
  },
  bottomContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    bottom: 0
  },

  headerItems: {

    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuIcon: {

    height: 35,
    width: 35
  },
  notificationIcon: {
    height: 35,
    width: 35
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    textAlign: 'left',
    marginTop: 30

  },
  secondaryTitle: {

    fontSize: 25,
    fontWeight: 'normal',
    paddingHorizontal: 30,
    textAlign: 'left',
    marginTop: 30
  },
  topListText: {
    alignItems: 'center'

  },
  topListTextSelected: {

    alignItems: 'center',
    color: '#fff'
  },
  horizontalCardContainer: {

    marginHorizontal: 10,
    paddingHorizontal: 0,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    height: 30,
    width: 100

  },
  horizontalCardContainerSelected: {

    marginHorizontal: 10,
    paddingHorizontal: 0,

    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 12,
    borderWidth: 1,
    height: 30,
    width: 100,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 13,


  },
  image: {

marginTop:-100,
    height: 500,
    width: '130%',
    marginHorizontal: 40

  },
  VerticalViewSize: {

    marginHorizontal: 30,
    marginTop:10,
  },
  VerticalViewFee: {

    marginHorizontal: 30,
    marginTop:10,
  },
  VerticalViewTime: {
marginTop:10,
    marginHorizontal: 30,
  },
  VerticalViewQuantity: {

    marginHorizontal: 30,
    marginTop:10,
  },
  VerticalViewFee: {

    marginHorizontal: 30,
    marginTop:10,
  },

  horizontalAddMinus: {

    flexDirection: 'row',
    marginTop:10,
    marginHorizontal:30
  },
  sizeTitle: {
    fontSize: 16,
   

  },
  sizeType: {
    fontSize: 22,
    fontWeight:'bold'

  },
  price:{
    fontSize: 16


  },
  descriptionText:{

    marginHorizontal:30,
    marginTop:  0,
    color:'#333',
    textAlign:'center'
  },
  imagesStyle:{

    height:30,
    width:30,
    tintColor:'white'
  },
  addButton:{

    height:30,
    width:30,
    borderRadius:15,
    color:'#333',
    // backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    alignSelf:'center',
    borderWidth: 1,
    textAlign:'center',
    borderColor: '#333',
    textAlignVertical: "center"
  },
  minusButton:{

    height:30,
    width:30,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius:15,
    color:'#333',
    textAlign:'center',
    // backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    textAlign:'center',
    textAlignVertical: "center"
  }

});
