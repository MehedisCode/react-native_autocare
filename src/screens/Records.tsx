import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// navigation

// import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../App';
// pdf download
const supportedURL = 'https://filetransfer.io/data-package/jlPmblVi/download';

const Records = (): JSX.Element => {
  // const {productId} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function setSearchText(_text: string): void {
    throw new Error('Function not implemented.');
  }
  // pdf
  function openPDF() {
    Linking.openURL(supportedURL);
  }

  return (
    <SafeAreaView style={styles.topContainer}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.profile}>
            <View style={styles.ppText}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 18}}>
                Hello, Kamal
              </Text>
              <Text>Mirpur-1, Dhaka</Text>
            </View>
            <View style={styles.ppImageBox}>
              <Image
                source={require('../../images/pp.png')}
                style={styles.ppImage}
              />
            </View>
          </View>
          {/* profile endl */}
          <View style={styles.cardContainer}>
            <View style={styles.cardArea}>
              <View style={styles.cardHeader}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 17,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  Card Service
                </Text>
                <Text>Booking ID: #12345678</Text>
              </View>
              <View style={styles.cardBody}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    paddingHorizontal: 15,
                    marginBottom: 10,
                    fontSize: 17,
                  }}>
                  Bangla Automotive
                </Text>
                <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
                  <View style={{flex: 1}}>
                    <Text>DATE</Text>
                    <Text>5th Oct 2023, Sunday</Text>
                  </View>
                  <View style={{alignItems: 'flex-end', flex: 1}}>
                    <Text>PICK-UP TIME</Text>
                    <Text>9:00-9:30am</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.cardFooter}
                onPress={() => {
                  openPDF();
                }}>
                <Text style={{color: 'green', fontWeight: 'bold'}}>Print</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* end card container  */}
        </View>
        {/* start Bottom Navbar  */}
        <View style={styles.bottomNavigation}>
          <View style={styles.bottomNavItem}>
            {/* <Image
              style={styles.bottomNavIcon}
              source={require('../../images/icon1.png')}
            /> */}
            <TouchableOpacity
              style={styles.bottomNavItem}
              onPress={() => navigation.navigate('Home')}>
              <Icon name="home" size={25} color="#9E9E9E" />
              <Text style={styles.bottomNavItemText}>Home</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomNavItem}>
            {/* <View>
              <MaterialCommunityIcons
                name="steering"
                size={24}
                color="#9E9E9E"
              />
            </View>
            <Text>Workshop</Text> */}
            <TouchableOpacity
              style={styles.bottomNavItem}
              onPress={() => {
                navigation.navigate('WorkShop');
              }}>
              <MaterialCommunityIcons
                name="steering"
                size={24}
                color="#9E9E9E"
              />
              <Text>Workshop</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomNavItem}>
            {/* <Image
              style={styles.bottomNavIcon}
              source={require('../../images/icon3.png')}
            /> */}
            <View>
              <Icon name="folder-open" size={23} color="gold" />
            </View>
            <Text>Records</Text>
          </View>
        </View>
        {/* //end */}
      </View>
    </SafeAreaView>
  );
};

export default Records;

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
  innerContainer: {},
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
  cardContainer: {
    marginTop: 30,
  },
  cardArea: {
    // borderWidth: 1,
  },
  cardHeader: {
    padding: 8,
    height: 80,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    paddingHorizontal: 22,
    justifyContent: 'center',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  cardBody: {
    padding: 8,
    height: 140,
    borderColor: '#E3E3E3',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  cardFooter: {
    borderColor: '#E3E3E3',

    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});
