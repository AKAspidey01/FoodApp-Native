import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import Signin from './Screens/Signin';
import Signup from './Screens/Signup';

const  Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="WelcomeScreen"
        component={WelcomeScreen}
        options = {{
          header : () => null, 
        }}/>
        <Stack.Screen name="Signin"
        component={Signin}
        options = {{
          header : () => null , 
        }}/>
        <Stack.Screen name="Signup"
        component={Signup}
        options ={{
          header : () => null ,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
