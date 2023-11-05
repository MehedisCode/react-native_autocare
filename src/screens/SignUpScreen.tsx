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

const SignUpScreen = () => {
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
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <View style={styles.inputForm}>
        <Text
          style={{
            width: '100%',
            marginLeft: 85,
            marginTop: 20,
            color: 'black',
          }}>
          Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Alex"
          value={email}
          onChangeText={text => setEmail(text)}
        />
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
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={{marginTop: 30}}>Already have an Account</Text>
          <Text
            style={{color: '#2196F3', textDecorationLine: 'underline'}}
            onPress={() => {
              navigation.navigate('LogInScreen');
            }}>
            Log In
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '80%',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
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
    color: 'white',
    textAlign: 'center',
  },
  back: {
    fontSize: 16,
    color: 'white',
  },
  smallButton: {
    // Adjust the size and style of the button to make it smaller
    width: '60%', // Adjust the width to your preference
    alignSelf: 'center', // Center the button horizontally
  },
  button: {
    backgroundColor: '#F7C911',
    padding: 10,
    borderRadius: 5,
    margin: 6,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    width: 90,
    height: 25,
    fontSize: 18,
  },
  inputForm: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;
