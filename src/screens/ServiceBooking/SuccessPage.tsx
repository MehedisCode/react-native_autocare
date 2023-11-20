import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// navigation

// import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../App';

const SuccessPage = (): JSX.Element => {
  // const {productId} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function setSearchText(_text: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={styles.container}>
        {/* start from top  */}
        <View style={{}}>
          <View style={{marginTop: 5}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
              Back
            </Text>
          </View>
          <View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 150,
              }}>
              <Image
                style={{height: 250, width: '90%'}}
                source={require('../../../images/success.png')}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'gold'}}>
              Order was placed Successfully!
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 18, width: '90%', textAlign: 'center'}}>
              We’ve received your order and our team is working to get it to you
              as quick and sae as possible.
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'gold',
                height: 40,
                paddingLeft: 10,
                borderRadius: 5,
                position: 'relative',
                top: 100,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                GO TO HOME
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* start  */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity
            style={styles.bottomNavItem}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <View>
              <Icon name="home" size={25} color="gold" />
            </View>
            <Text>Home</Text>
          </TouchableOpacity>
          <View style={styles.bottomNavItem}>
            <TouchableOpacity
              style={styles.bottomNavItem}
              onPress={() => navigation.navigate('WorkShop')}>
              <MaterialCommunityIcons
                name="steering"
                size={24}
                color="#9E9E9E"
              />
              <Text style={styles.bottomNavItemText}>Workshop</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomNavItem}>
            {/* <Image
              style={styles.bottomNavIcon}
              source={require('../../images/icon3.png')}
            /> */}
            {/* <View>
              <Icon name="folder-open" size={23} color="#9E9E9E" />
            </View>
            <Text>Records</Text> */}
            <TouchableOpacity
              style={styles.bottomNavItem}
              onPress={() => navigation.navigate('Records')}>
              <Icon name="folder-open" size={23} color="#9E9E9E" />
              <Text style={styles.bottomNavItemText}>Records</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* //end */}
      </View>
    </SafeAreaView>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between', // Push content to the top
  },
  profile: {
    flexDirection: 'row',
    marginTop: 10,
  },
  ppImage: {
    height: 50,
  },
  ppText: {
    width: '49%',
  },
  ppImageBox: {
    width: '49%',
    alignItems: 'flex-end',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 40,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderColor: '#757575',
    borderWidth: 1,
    borderRadius: 10,
  },
  banner: {},
  bannerImage: {
    height: 150,
    width: '100%',
    marginTop: 30,
    borderRadius: 8,
  },
  dot: {marginTop: 15, justifyContent: 'center', alignItems: 'center'},
  dotImage: {height: 8},
  carService: {
    height: 60,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    flexDirection: 'row',
  },
  serviceContainer: {},
  carServiceTxt: {fontSize: 16, color: 'black', flex: 1},
  carServiceImage: {alignItems: 'flex-end', position: 'relative', bottom: 10},
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto',
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
  },
  bottomNavIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
});
