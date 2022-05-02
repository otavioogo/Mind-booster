import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from './src/pages/home';
import Principal from "./src/pages/home/Principal";
import 'react-native-gesture-handler';

import Menu from "./src/components/menu";
import Card from "./src/components/menu/Card";
import Cards from "./src/pages/home/Cards"
import Editar from "./src/pages/home/Editar";
import Cartao from "./src/pages/home/Cartao";

const Stack = createStackNavigator();



function MyStack() {
  return (
    
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal}/>
      <Stack.Screen name="Menu" component={Menu}/>
      <Stack.Screen name="Card" component={Card}/>
      <Stack.Screen name="Cards" component={Cards}/>
      <Stack.Screen name="Editar" component={Editar} />
      <Stack.Screen name="Cartao" component={Cartao} />
      
    </Stack.Navigator>
  );
}

export default function App(Stack) {

  
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}