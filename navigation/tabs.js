
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { Ionicons } from "@expo/vector-icons"; 

const Tab = createBottomTabNavigator();



const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle:
        {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          borderRadius: 15,
          height: 70,
          ...styles.shadow
        }

      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={
          {
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0
              }}>
                <Ionicons name="home-outline" size={30} color="grey" /> 
                <Text
                  style={{
                    color: focused ? 'black' : 'grey', fontSize: 12
                  }}>
                  HOME
                </Text>
              </View>
            )
          }
        }
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingScreen} 
        options={
          {
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0
              }}>
                <Ionicons name="settings-outline" size={30} color="grey" /> 
                <Text
                  style={{
                    color: focused ? 'black' : 'grey', fontSize: 12
                  }}>
                  SETTINGS
                </Text>
              </View>
            )
          }
        }
      />
      <Tab.Screen 
        name="TEST" 
        component={SettingScreen} 
        options={
          {
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10
              }}>
                
                <Text
                  style={{
                    color: focused ? 'black' : 'grey', fontSize: 12
                  }}>
                  TEST
                </Text>
              </View>
            )
          }
        }
      />
      <Tab.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={
          {
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0
              }}>
                <Ionicons name="list-outline" size={30} color="grey" /> 
                <Text
                  style={{
                    color: focused ? 'black' : 'grey', fontSize: 12
                  }}>
                  DETAILS
                </Text>
              </View>
            )
          }
        }
      />
      
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={
          {
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 0
              }}>
                <Ionicons name="person-outline" size={30} color="grey" /> 
                <Text
                  style={{
                    color: focused ? 'black' : 'grey', fontSize: 12
                  }}>
                  PROFILE
                </Text>
              </View>
            )
          }
        }
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create(
  {
    shadow: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5
    }
  }
);

export default Tabs;