
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import Device from './pantallas/device';
import Home from './pantallas/home';
import Scaner from './pantallas/scaner';
import Generator from './pantallas/generator';
import Contact from './pantallas/contact';


const HamburgerIcon = (props) => {
 
  const toggleDrawer = () => {
 
    props.navigationProps.toggleDrawer();
 
  }
  return (
 
    <View style={{ flexDirection: 'row' }}>
 
      <TouchableOpacity onPress={toggleDrawer} >
 
        <Image
          source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
 
      </TouchableOpacity>
 
    </View>
 
  );
}


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => (<HamburgerIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: '#ff0066',
          },
          headerTintColor: '#fff',
        }}
      />
      
    </Stack.Navigator>
  );
}

function ScannerStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Scaner">
      <Stack.Screen
        name="Scaner"
        component={Scaner}
        options={{
          title: 'Scaner QR',
          headerLeft: () => (<HamburgerIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: '#ff0066',
          },
          headerTintColor: '#fff',
        }}
      />
      
    </Stack.Navigator>
  );
}

function DeviceStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Device">
      <Stack.Screen
        name="Device"
        component={Device}
        options={{
          title: 'Info Device',
          headerLeft: () => (<HamburgerIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: '#ff0066',
          },
          headerTintColor: '#fff',
        }}
      />
      
    </Stack.Navigator>
  );
}

function ContactStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Info Contact',
          headerLeft: () => (<HamburgerIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: '#ff0066',
          },
          headerTintColor: '#fff',
        }}
      />
      
    </Stack.Navigator>
  );
}


function GeneratorStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Generator">
      <Stack.Screen
        name="Generator"
        component={Generator}
        options={{
          title: 'Generator QR',
          headerLeft: () => (<HamburgerIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: '#ff0066',
          },
          headerTintColor: '#fff',
        }}
      />
      
    </Stack.Navigator>
  );
}

const App: () => Node = () => {
  
  

  return (
    <NavigationContainer>
      <Drawer.Navigator>
         <Drawer.Screen name="Home" component={ HomeStack } />
         <Drawer.Screen name="Scanner QR" component={ ScannerStack } />
         <Drawer.Screen name="Info Device" component={ DeviceStack } />
         <Drawer.Screen name="Info Contact" component={ ContactStack } />
         <Drawer.Screen name="Generator QR" component={ GeneratorStack } />
      </Drawer.Navigator>
   </NavigationContainer>
  );
};


export default App;
