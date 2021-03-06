import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator,NavigationStackOptions } from 'react-navigation-stack';
import AppRouter from './src/navigation/Navigation'
import {Provider} from 'mobx-react'
import store from './src/store/Store'
const App=()=>{
    return(
        <Provider store={store}>
        <AppRouter/>
        </Provider>
    )};
export default App;

