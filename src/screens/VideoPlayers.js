import React, {Component, useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Video from 'react-native-video';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {observer, inject} from 'mobx-react';
import videoList from './VIdeoList';
import styles from '../styleSheet/Styles';
const VideoPlayer = (props) => {
  const {VideoLink} = props.store;
  let videoPlayer;
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [screenType, setScreenType] = useState('contain');
  const [videos, setVideos] = useState(VideoLink);
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const changeVideos = (name) => {
    setVideos(name);
  };

  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };
  const onSeek = (seek) => {
    //Handler for change in seekbar

    videoPlayer.seek(seek);
  };

  const onPaused = (playerState) => {
    //Handler for Video Pause
    setPaused(!paused, playerState);
  };

  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.seek(0);
  };

  const onProgress = (data) => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };
  const onLoad = (data) => {
    setDuration(data.duration), setIsLoading(false);
  };

  const onLoadStart = (data) => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onError = () => alert('Oh! ', error);

  const exitFullScreen = () => {
    alert('Exit full screen');
  };
  const enterFullScreen = () => {};
  const onFullScreen = () => {
    if (screenType == 'contain') setScreenType('cover');
    else setScreenType('contain');
  };

  const onSeeking = (currentTime) => setCurrentTime(currentTime);

  return (
    <View style={styles.containers}>
      <View style={{flex: 1}}>
        <Video
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          onProgress={onProgress}
          paused={paused}
          ref={(videoPlayers) => (videoPlayer = videoPlayers)}
          resizeMode={screenType}
          onFullScreen={isFullScreen}
          source={videos}
          style={styles.mediaPlayer}
          volume={10}
        />
        <MediaControls
          duration={duration}
          isLoading={isLoading}
          mainColor="orange"
          onFullScreen={onFullScreen}
          onPaused={onPaused}
          onReplay={onReplay}
          onSeek={onSeek}
          onSeeking={onSeeking}
          playerState={playerState}
          progress={currentTime}
        />
        <Text style={styles.btnText}>{name}</Text>
        <Text style={{fontSize: 11, color: 'white', alignSelf: 'flex-start'}}>
          {title}
        </Text>
      </View>
      {screenType == 'contain' ? (
        <View style={{flex: 2}}>
          <FlatList
            data={videoList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <ScrollView>
                  {videos == item.source ? null : (
                    <TouchableOpacity
                      onPress={() => {
                        setVideos(item.source);
                        setName(item.name);
                        setTitle(item.title);
                      }}
                      style={styles.btn}>
                      <Image
                        source={{uri: item.Url}}
                        style={{height: '80%', width: '100%'}}
                      />
                      <Text style={styles.btnText}>{item.name}</Text>
                      <Text
                        style={{
                          fontSize: 11,
                          color: 'white',
                          alignSelf: 'flex-start',
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  )}
                </ScrollView>
              </View>
            )}
            ItemSeparatorComponent={itemSeparator}
          />
        </View>
      ) : null}
    </View>
  );
};
export default inject('store')(observer(VideoPlayer));
