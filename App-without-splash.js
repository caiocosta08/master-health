import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { } from '@react-navigation/core';

// Redux
import { store } from "./src/Store";
import { Provider } from 'react-redux';

//views
import Login from './src/views/Login';
import Register from './src/views/Register';
import Home from './src/views/Home';
import EditProfile from './src/views/EditProfile';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EditProfile">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: null }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: null }} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: null }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: null }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;