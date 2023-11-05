import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../App';

const Tab = createBottomTabNavigator();

const LogInScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.container}>
      {/* Header component with title */}
      <View style={styles.header}>
        <Text
          style={styles.back}
          onPress={() => {
            navigation.navigate('SplashScreen');
          }}>
          Back
        </Text>
        <Text style={styles.title}>Log In</Text>
      </View>

      <View style={styles.inputForm}>
        <Text
          style={{
            width: '100%',
            marginLeft: 85,
            marginTop: 20,
            color: 'black',
          }}>
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="abcd@gmail.com"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <Text
          style={{
            width: '100%',
            marginLeft: 85,
            marginTop: 20,
            color: 'black',
          }}>
          Password
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center'}}>
          <Text style={{marginTop: 30, color: 'black'}}>Create Account</Text>
          <Text
            style={{color: '#ffffff', textDecorationLine: 'underline'}}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            Register
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7C911',
  },
  input: {
    width: '80%',
    margin: 10,
    padding: 10,
    borderWidth: 0,
    backgroundColor: '#E3BA12',
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F7C911',
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  back: {
    fontSize: 16,
    color: 'black',
  },
  smallButton: {
    // Adjust the size and style of the button to make it smaller
    width: '60%', // Adjust the width to your preference
    alignSelf: 'center', // Center the button horizontally
  },
  button: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    margin: 6,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    width: 90,
    height: 25,
    fontSize: 18,
  },
  inputForm: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default LogInScreen;
