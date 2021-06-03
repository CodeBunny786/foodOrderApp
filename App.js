/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import {View,Button, Alert,Text,TouchableHighlight, Image,SafeAreaView,FlatList, TouchableOpacity} from 'react-native';
 import Main from './Screens/Main';
 import Splash from './Screens/Splash';
 import {Colors, Images} from './Themes';
 import styles from './Screens/Main/styles';
 
 
 //first tabbar
 
 function MyTabBar({ state, descriptors, navigation }) {
   return (
     <View style={{ flexDirection: 'row',backgroundColor:"yellow",height:50,borderRadius:50,justifyContent:"center",alignItems:"center" }}>
       {state.routes.map((route, index) => {
         const { options } = descriptors[route.key];
         const label =
           options.tabBarLabel !== undefined
             ? options.tabBarLabel
             : options.title !== undefined
             ? options.title
             : route.name;
 
         const isFocused = state.index === index;
 
         const onPress = () => {
           const event = navigation.emit({
             type: 'tabPress',
             target: route.key,
           });
 
           if (!isFocused && !event.defaultPrevented) {
             navigation.navigate(route.name);
           }
         };
 
         const onLongPress = () => {
           navigation.emit({
             type: 'tabLongPress',
             target: route.key,
           });
         };
 
         return (
           <TouchableOpacity
             accessibilityRole="button"
             accessibilityStates={isFocused ? ['selected'] : []}
             accessibilityLabel={options.tabBarAccessibilityLabel}
             testID={options.tabBarTestID}
             onPress={onPress}
             onLongPress={onLongPress}
             style={{ flex: 1, alignItems:"center" }}
           >
             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
               {label}
             </Text>
           </TouchableOpacity>
         );
       })}
     </View>
   );
 }
 
 function MyTabs2() {
   return (
     <Tab.Navigator
        // activeColor="#00aea2"
        // inactiveColor="#95a5a6"
        barStyle={{ backgroundColor: 'black' }}
        barStyle={{ backgroundColor: 'green' }}
        screenOptions={{
          tabBarOptions: {
            style: {backgroundColor: 'red',},

          },
      }}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'black',
        style: {
          backgroundColor: 'black',
          paddingBottom: 3,
          paddingHorizontal:3
        },
        inactiveBackgroundColor: 'black',
            style: {
                  backgroundColor: 'black',
                  paddingBottom: 3,
                  marginHorizontal:0,
            }
     }
    }>
       <Tab.Screen
         name="Main"
         component={Main}
         options={{
           tabBarLabel: 'Home',
           tabBarIcon: ({ color, size }) => (
             <Image style={styles.imagesStyle} source={Images.ic_home}></Image>
           ),
         }}
       />
       <Tab.Screen
         name="Splash"
         component={Splash}
         options={{
           tabBarLabel: 'Updates',
           tabBarIcon: ({ color, size }) => (
             <Image style={styles.imagesStyle} source={Images.ic_profile}></Image>
           ),
         }}
       />
     
     </Tab.Navigator>
   );
 }
 // second tababr
 
 
 // else 
 
 const Tab = createBottomTabNavigator();
 export default function App() {
   return (
     <NavigationContainer >
        <MyTabs2  />
     </NavigationContainer>
   );
 }
 
 
 
 
