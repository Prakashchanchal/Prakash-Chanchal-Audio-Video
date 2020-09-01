import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator,NavigationStackOptions } from 'react-navigation-stack';
import AudioPlayer from '../screens/AudioPlayer'
import Video from '../screens/Video'
import VideoPlayers from '../screens/VideoPlayers'
import Home from '../screens/Home'
const AppRouter=createStackNavigator(
    {
        AudioPlayer:{screen: AudioPlayer,navigationOptions:{headerShown:false}},
        Video:{screen: Video,navigationOptions:{headerShown:false}},
        VideoPlayers:{screen: VideoPlayers,navigationOptions:{headerShown:false}},
        Home:{screen:Home,navigationOptions:{headerShown:false}}
    },
    {
        initialRouteName:'Home'
    }

)
export default createAppContainer(AppRouter);