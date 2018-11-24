/** @format */
import { Navigation } from "react-native-navigation"
import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';

const store = configureStore()
Navigation.registerComponentWithRedux(`navigation.playground.HomeScreen`, () => Home, Provider,store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.HomeScreen"
      }
    }
  });
});
