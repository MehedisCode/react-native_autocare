import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'SplashScreen'>;

const Home = ({navigation}: HomeProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../images/welcome_photo.png')}
          style={styles.wlcImage}
        />
      </View>
      <View style={{width: '100%', marginLeft: 40, marginBottom: 40}}>
        <Text style={{left: 0, fontSize: 30, color: 'white'}}>WELCOME</Text>
        <Text style={{color: 'white'}}>Let's Get Started</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('LogInScreen')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.buttonText2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

// Set the navigation options to hide the header
Home.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7C911', // Background color of the outer container
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  button1: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 50,
    margin: 6,
    width: 110,
  },
  button2: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    margin: 6,
    width: 110,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    width: 90,
    height: 30,
    fontSize: 20,
  },
  buttonText2: {
    color: 'black',
    textAlign: 'center',
    width: 90,
    height: 30,
    fontSize: 20,
  },
  image: {
    height: 100,
  },
  wlcImage: {
    height: 320,
    width: 300,
  },
});
