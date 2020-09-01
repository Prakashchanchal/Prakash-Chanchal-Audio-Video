import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Slider,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Player} from '@react-native-community/audio-toolkit';
import Icon from 'react-native-vector-icons/FontAwesome';
import {inject, observer} from 'mobx-react';
import data from './AudioList';
import SwipeUpDown from 'react-native-swipe-up-down';
import Styles from '../styleSheet/Styles';
let player = null;
let interval;
let progressInterval;
let lastSeek = 0;
const AudioPlayer = (props) => {
  const {
    Name,
    Url,
    Title,
    updateName,
    updateUrl,
    updateTitle,
    Description,
    updateDescription,
  } = props.store;
  const [btn, setBttn] = useState('play-circle');
  const [progress, setProgress] = useState(0);
  const [time, setTm] = useState(0);
  const [fileName, setFileName] = useState('vaari.mp3');
  const togglePlayPause = async () => {
    try {
      if (player.isPlaying) {
        setBttn('play-circle');
        await player.pause();
      } else {
        setBttn('pause-circle');
        await player.play();
      }
    } catch (error) {
      console.log('error at play', error);
    }
  };

  useEffect(() => {
    init();
    return () => {
      player.destroy();
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [Name]);
  const init = () => {
    player = new Player(Name, {
      autoDestroy: false,
    }).prepare((err) => {
      if (err) {
        console.log('error at _reloadPlayer():');
        console.log(err);
      }
    });
    progressInterval = setInterval(() => {
      if (player && shouldUpdateProgressBar()) {
        let currentProgress = Math.max(0, player.currentTime) / player.duration;
        if (isNaN(currentProgress)) {
          currentProgress = 0;
        }
        let readableTm = readableTime(player.currentTime / 1000);
        setTm(readableTm);
        setProgress(currentProgress);
      }
    }, 1000);
  };
  const stop = () => {
    player.stop();
  };
  const seek = async (percentage) => {
    if (!player) {
      return;
    }
    lastSeek = Date.now();
    let position = percentage * player.duration;
    await player.seek(position);
  };
  const shouldUpdateProgressBar = () => {
    // Debounce progress bar update by 200 ms
    return Date.now() - lastSeek > 200;
  };
  function readableTime(duration) {
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    var ret = '';
    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  }
  const seekBackward = async () => {
    if (!player) {
      return;
    }
    lastSeek = Date.now();
    let position =
      player.currentTime - 5000 <= 0 ? 0 : player.currentTime - 5000;
    await player.seek(position);
  };

  const seekForward = async () => {
    if (!player) {
      return;
    }
    lastSeek = Date.now();
    let position =
      player.currentTime + 5000 >= player.duration
        ? player.duration
        : player.currentTime + 5000;
    await player.seek(position);
  };
  return (
    <View
      style={{
        flex: 1,
        // padding: 20,
      }}>
      <View style={{height: '90%'}}>
        <Image
          source={{uri: 'https://i.ytimg.com/vi/nG79InUijJI/maxresdefault.jpg'}}
          style={{height: '30%', width: '100%', alignSelf: 'center'}}
        />

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                updateName(item.fileName);
                updateUrl(item.imageUrl);
                setTm(0);
                player.destroy();
                updateTitle(item.title);
                updateDescription(item.description);
              }}
              style={Styles.touchButton}>
              <Image source={{uri: item.imageUrl}} style={Styles.image} />
              <View style={{flexDirection: 'column'}}>
                <Text style={Styles.buttonText}>{item.title}</Text>
                <Text style={Styles.buttonText}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <SwipeUpDown
        itemMini={
          <View style={Styles.container}>
            <View style={{flexDirection: 'row'}}>
              <Image source={{uri: Url}} style={Styles.image} />
              <View>
                <Text style={{fontSize: 16, marginTop: 5}}>{Title}</Text>
                <Text style={{fontSize: 12}}>{Description}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={togglePlayPause}
              style={{alignSelf: 'flex-end'}}>
              <Icon size={45} name={btn} color="red" />
            </TouchableOpacity>
          </View>
        }
        itemFull={
          <View>
            <View style={{height: '84%'}}>
              <ImageBackground
                source={{uri: Url}}
                style={Styles.imageBackGround}
              />
            </View>
            <View>
              <View style={Styles.iconContainer}>
                <View style={Styles.view}>
                  <Text>{time}</Text>
                  <View style={{width: '80%'}}>
                    <Slider
                      step={0.0001}
                      onValueChange={(percentage) => seek(percentage)}
                      value={progress}
                    />
                  </View>
                  <Text>
                    {player && player.duration != -1
                      ? readableTime(player.duration / 1000)
                      : readableTime(0)}
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <TouchableOpacity
                    onPress={seekBackward}
                    hitSlop={{right: 20}}>
                    <Icon size={40} name="backward" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={togglePlayPause}
                    style={{
                      alignSelf: 'center',
                      marginRight: 15,
                      marginLeft: 15,
                    }}>
                    <Icon size={50} name={btn} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={seekForward} hitSlop={{left: 20}}>
                    <Icon size={40} name="forward" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        }
        swipeHeight={100}
        style={{backgroundColor: 'white'}}
      />
    </View>
  );
};

export default inject('store')(observer(AudioPlayer));
