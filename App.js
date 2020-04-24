import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Feather } from "@expo/vector-icons";

import LoginScreen from './screens/LoginScreen';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3  from './screens/Screen3';

import SideBar from './components/SideBar';


const Screen1Stack = createStackNavigator({
  Screen1: Screen1,
});

const Screen2Stack = createStackNavigator({
  Screen2: Screen2,
});

const Screen3Stack = createStackNavigator({
  Screen3 : Screen3 ,
});


const AppStack = createDrawerNavigator({
    Screen1: {
      name: 'Screen1',
      screen: Screen1Stack,
      navigationOptions: {
        title: 'Screen1',
        drawerIcon: ({ tintColor }) => <Feather name="user" size={ 16 } color={ tintColor } />
      },
    },
    Screen2: {
      name: 'Screen2',
      screen: Screen2Stack,
      navigationOptions: {
        title: 'Screen2',
        drawerIcon: ({ tintColor }) => <Feather name="message-square" size={ 16 } color={ tintColor } />
      },
    },
    Screen3: {
      name: 'Screen3',
      screen: Screen3Stack,
      navigationOptions: {
        title: 'Screen3',
        drawerIcon: ({ tintColor }) => <Feather name="link" size={ 16 } color={ tintColor } />
      },
    },
    Login: {
      name: 'Login',
      screen: LoginScreen,
      navigationOptions: {
        drawerLabel: ()=>null,
        drawerLockMode: 'locked-closed',
      },
    },
  },
  {
    contentComponent: props => <SideBar { ...props } />,
    contentOptions: {
      activeBackgroundColor: "rgba(171, 183, 183, 0.4)",
      activeTintColor: "#383838",
      itemsContainerStyle: {
          marginTop: 16,
          marginHorizontal: 8
      },
      itemStyle: {
          borderRadius: 4
      }
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: {
      screen: LoginScreen,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
