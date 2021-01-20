import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { } from '@react-navigation/core';

// Redux
import { store } from "./src/Store";
import { Provider } from 'react-redux';

//screens
import Login from './src/views/Login';
import Home from './src/views/Home';
import Register from './src/views/Register';
import EditProfile from './src/views/EditProfile';
import Consultations from './src/views/Consultations';
import Budget from './src/views/Budget';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{ backgroundColor: "#1c87cb" }} drawerContentOptions={{ activeBackgroundColor: "#dfdfdf", activeTintColor: "#1c87cb", inactiveTintColor: "#efefef" }} >
          <Drawer.Screen name="Login" component={Login} options={{ headerShown: null, title: "1 - Login", }} />
          <Drawer.Screen name="Register" component={Register} options={{ headerShown: null, title: "2 - Cadastro", }} />
          <Drawer.Screen name="Home" component={Home} options={{ headerShown: null, title: "3 - Home", }} />
          <Drawer.Screen name="Budget" component={Budget} options={{ headerShown: null, title: "4 - Orçamentos", }} />
          <Drawer.Screen name="Consultations" component={Consultations} options={{ headerShown: null, title: "5 - Consultas", }} />
          <Drawer.Screen name="EditProfile" component={EditProfile} options={{ headerShown: null, title: "6 - Editar Perfil", }} />
          </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;