import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './src/pages/Home'
import DePara from './src/pages/DePara'
import Apurado from './src/pages/Apurado';
import Start from './src/pages/Start';
import ApuradoTela1 from './src/pages/ApuradoTela1';

const Stack = createNativeStackNavigator();

export default function App() {


  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
        name='Home' 
        component={Home}
        options={{
          title: 'Inventa_Rio',
          headerStyle: {
            backgroundColor: '#4c89e3'
          },
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen name='DePara' component={DePara} />
        <Stack.Screen name='Apurado2' component={Apurado} />
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='Apurado1' component={ApuradoTela1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

