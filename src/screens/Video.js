import React, {Component} from 'react';
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
import videoList from './VIdeoList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {observer, inject} from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styleSheet/Styles';
const Videos = (props) => {
  const {updateVideoLink} = props.store;
  const itemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };
  return (
    <View style={styles.titleView}>
      <View style={styles.flatlst}>
        <Text style={{fontSize: 20, color: 'white'}}>Media Player</Text>
        <Icon name="film" size={25} color="white" />
      </View>
      <FlatList
        data={videoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                updateVideoLink(item.source);
                props.navigation.navigate('VideoPlayers');
              }}
              style={styles.btn}>
              <Image source={{uri: item.Url}} style={styles.sourceImage} />
              <View style={styles.flatlst}>
                <View>
                  <Text style={styles.btnText}>{item.name}</Text>
                  <Text style={styles.btonText}>{item.title}</Text>
                </View>
                <FontAwesome name="play-circle" size={35} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
export default inject('store')(observer(Videos));
