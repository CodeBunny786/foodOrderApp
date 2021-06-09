import 'react-native-get-random-values';
import React, {Component} from 'react';
import {View,Alert,Text, Image,SafeAreaView,FlatList, TouchableOpacity} from 'react-native';
// Styles
import {BlurView} from '@react-native-community/blur';
import styles from './styles';
import { Images } from '../../Themes';
const DATA = [
  { key: 'Pizza',id:'1' }, { key: 'Home Made',id:'2'  }, { key: 'Fast Food',id:'3' },
  { key: 'Hot',id:'4' }
]
export default class Main extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      headerMode: 'none',
    };
  };

  state = {
    selectedTabIndex: 0,
    items: '',
    selectedTabItem:DATA[0],
    quantity:0
  };

  componentDidMount() {}
  onBackPress = () => {
    this.props.navigation.goBack();
  };
  openLink = (link) => {
    Alert.alert(link);
  };
  onItemPress=(key)=>{

    this.setState({selectedTabItem:key})

  }
  onItemRemove =()=>{

    // remove one item if bigger than 0

    if(this.state.quantity > 0 ){

      this.setState({quantity:this.state.quantity-1})
    }else{

      this.setState({quantity:0})
    }
}
  onItemAdd =()=>{

    // add one item if bigger than 0

    if(this.state.quantity > -1 ){

      this.setState({quantity:this.state.quantity+1})
    }else{

      
    }
  }
  _moveToScreen = (link, index) => {
    this.setState({link, selectedTabIndex: index});
  };
  render() {
    return (
      <View style={styles.container}>
     <BlurView
       
       style={{
        width:'100%',
        height:'199%',
        alignSelf:'center',
        borderRadius:20,
        borderWidth:.1
       }}
       blurType="light"
       blurAmount={8}
       >
         <SafeAreaView>
           <View style={styles.headerItems}>
             <Image style={styles.menuIcon} resizeMode="contain" source={Images.ic_menu} ></Image>
             <Image style={styles.notificationIcon} resizeMode="contain"  x source={Images.ic_notification} ></Image>
             </View>

            <Text style={styles.mainTitle}>TAKE YOUR HEALTHY FOOD</Text>
            <Text style={styles.secondaryTitle}>Categories</Text>

            <View style={{height:null,marginTop:10}}> 
            <FlatList
              data={DATA}
              showsHorizontalScrollIndicator={false}
              style={{ height: 80,marginLeft:20 }}
              horizontal={true}
              renderItem={({ item }) => <View style={[this.state.selectedTabItem.id === item.id ? styles.horizontalCardContainerSelected : styles.horizontalCardContainer]}>
                
                <TouchableOpacity onPress={()=>this.onItemPress(item)}>
                <Text style={[ this.state.selectedTabItem.id === item.id ? styles.topListTextSelected :styles.topListText]}> {item.key}</Text>
                  </TouchableOpacity>
                  </View>
                }
               />
            </View>
           </SafeAreaView>
           <View style={{flexDirection:"row",marginTop:10}}>
            <View  style={{flex:1,width:'50%' }}>
           <View style={styles.VerticalViewSize}>
             <Text style={styles.sizeTitle} >size</Text>
             <Text style={styles.sizeType} >Medium</Text>
             <Text style={styles.price} >$0.5</Text>
      
             </View>
             
             <View style={styles.VerticalViewFee}> 
             <Text>size</Text>
             <Text>Medium</Text>
             <Text> $0.5</Text>
             </View>
             <View style={styles.VerticalViewTime}> 
             <Text>shipping feee</Text>
             <Text>2.5 km</Text>
             <Text> $0.5</Text>
             </View>
             <View style={styles.VerticalViewQuantity}> 
             <Text>Delivery in</Text>
             <Text>10 min</Text>
             <Text> motorbike</Text>
             </View>
             <View style={styles.VerticalViewDescription}> 
             <View style={styles.horizontalAddMinus}> 
             <TouchableOpacity onPress={()=>this.onItemRemove()}>
             <View style={styles.roundView}>
             <Text style={styles.minusButton}> - </Text>
             </View>
             </TouchableOpacity>

             <Text style={styles.quantity}> {this.state.quantity >9  ? this.state.quantity :'0' + this.state.quantity} </Text>
        
               <TouchableOpacity  style={styles.roundView} onPress={()=>this.onItemAdd()}>
               <Text t style={styles.addButton}> +</Text>
               </TouchableOpacity>        
             </View>
            
             </View>
             
            </View>
            
            <View  style={{flex:1,width:'50%',height:400  }}>
            <Image resizeMode='contain' style={styles.image} source={Images.ic_plate}></Image>
            </View>
            </View>
            <Text style={styles.descriptionText}> + sjsjn kss ks sks ks sks sksm sks sksms ks sskomss ssmks kss ksnsknsk nsks nsks ksnksnksn </Text>
            <View style={styles.bottomContainer}>
        </View>

    </BlurView>
    </View>
    );
  }
}
