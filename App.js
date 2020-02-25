import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons';
import MessageScreen from './screens/MessageScreen';
import PostScreen from './screens/PostScreen';
import NotificationScreen from './screens/NotificationScreen';



const AppTabNavigation=createBottomTabNavigator(
  {
    Home:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarIcon:()=> <Ionicons name="ios-home" size={24} color="darkblue" />

      }
    },
    Message:{
      screen:MessageScreen,
      navigationOptions:{
        tabBarIcon:()=> <Ionicons name="ios-chatboxes" size={24} color="darkblue" />

      }
    },
    Post:{
      screen:PostScreen,
      navigationOptions:{
        tabBarIcon:()=> <Ionicons name="ios-add-circle" size={48} color="#E9446A"  style={{shadowColor:"E9446A",shadowOffset:{width:0,height:0},shadowOffset:10,shadowOpacity:0.3}}/>

      }
    },
    Notification:{
      screen:NotificationScreen,
      navigationOptions:{
        tabBarIcon:()=> <Ionicons name="ios-notifications" size={24} color="darkblue" />

      }
    },
    Profile:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarIcon:()=> <Ionicons name="ios-person" size={24} color="darkblue" />

      }
    }
  },
  
  {
    tabBarOptions:{
      activeTintColor:"red",
      inactiveTintColor:"black",
      showLabel:false

    }
  }
  )



const AppStack=createStackNavigator({
  Home:HomeScreen
})


const AuthStack=createStackNavigator({

  Register:RegisterScreen,
  Login:LoginScreen,
  
  
});

const ao=createBottomTabNavigator



export default createAppContainer(createSwitchNavigator(
  {
    Loading:LoadingScreen,
    App:AppTabNavigation,
    Auth:AuthStack
  },
  {
    initialRouteName: 'Loading'
  }
));
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <LoadingScreen/>
//       <HomeScreen/>
//       <LoginScreen/>
//       <RegisterScreen/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
