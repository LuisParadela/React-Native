// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end',paddingBottom:10}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent:'flex-end',padding:10}}>
      <Text>Details Screen</Text>
      <Button style={{padding:10}}
        title="Go to Home Screen"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Results"
        onPress={() => navigation.push('Results')}
      />
    </View>
  )
}

function ResultScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent:'flex-end',padding:10}}>
      <Text>Result Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{title:"Overview"}}
        />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        option={{title:"Second Overview"}}
        />
        <Stack.Screen
        name="Results"
        component={ResultScreen}
        option={{title:"Results Screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;