import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = (props) => {
  return (
    <View style={{alignItems: 'center', flex: 1}}>
      <TouchableOpacity
        style={styles.audioBtn}
        onPress={() => props.navigation.navigate('AudioPlayer')}>
        <View style={styles.view}>
          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/en/5/5d/Maana_Ke_Hum_Yaar_Nahin.jpg',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/60/72/d8/6072d81a53eb68c6223171177996501f.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.view}>
          <Image
            source={{
              uri:
                'https://m.media-amazon.com/images/I/81hsOcDNsnL._SS500_.jpg',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri:
                'https://a10.gaanacdn.com/gn_img/albums/XzVWRLKdqR/zVWRnxreWd/size_xxl.webp',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Audio Player</Text>
          <Icon name="music" size={34} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.videoBtn}
        onPress={() => props.navigation.navigate('Video')}>
        <View style={styles.view}>
          <Image
            source={{
              uri:
                'https://pm1.narvii.com/6204/29cbbe37926a091f32c05a3db3edb85a18cb1b4e_hq.jpg',
            }}
            style={styles.image}
          />
          <Image
            source={{uri: 'https://wallpaperaccess.com/full/319121.jpg'}}
            style={{width: '50%', height: '100%'}}
          />
        </View>
        <View style={styles.view}>
          <Image
            source={{
              uri:
                'https://i3.sndcdn.com/avatars-EwvaN0xN3syJosOl-zEGy9A-t500x500.jpg',
            }}
            style={styles.image}
          />
          <Image
            source={{
              uri:
                'https://i.pinimg.com/736x/b2/7e/d1/b27ed1e725e0cc947bcddb5b04bbcfe3.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>Video Player</Text>
          <Icon name="film" size={34} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '100%',
  },
  audioBtn: {
    width: '80%',
    height: '30%',
    marginBottom: 130,
    margin: 10,
  },
  view: {
    flexDirection: 'row',
    height: '70%',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'purple',
  },
  videoBtn: {
    width: '80%',
    height: '30%',
  },
});
export default Home;
