import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// navigation

// import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../App';

const ScheduleScreen = (): JSX.Element => {
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
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
              Checkout
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#C6C6C6',
              height: 60,
              justifyContent: 'center',
              paddingLeft: 20,
              marginTop: 20,
              borderRadius: 8,
            }}>
            <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>
              Add Pick-up Adress
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
              When do you want the service?
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
                marginTop: 20,
              }}>
              Select Date
            </Text>
            <View style={{marginTop: 20, flexDirection: 'row'}}>
              <View style={styles.dateBox}>
                <Text style={{fontWeight: 'bold'}}>Today</Text>
                <Text style={{fontWeight: 'bold'}}>21</Text>
              </View>
              <View style={styles.dateBox}>
                <Text style={{fontWeight: 'bold'}}>Tomorrow</Text>
                <Text style={{fontWeight: 'bold'}}>22</Text>
              </View>
              <View style={styles.dateBox}>
                <Text style={{fontWeight: 'bold'}}>Wed</Text>
                <Text style={{fontWeight: 'bold'}}>23</Text>
              </View>
              <View style={styles.dateBox}>
                <Text style={{fontWeight: 'bold'}}>Thu</Text>
                <Text style={{fontWeight: 'bold'}}>24</Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginTop: 25,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 15,
            }}>
            Select Pick-up Time Slot
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                borderColor: '#C6C6C6',
                borderWidth: 1,
                height: 50,
                justifyContent: 'center',
                paddingLeft: 15,
                flex: 1,
                marginRight: 10,
                borderRadius: 8,
              }}>
              <Text style={{fontWeight: 'bold'}}>8:00 - 8:30am</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                borderRadius: 8,
                borderColor: '#C6C6C6',
                borderWidth: 1,
                height: 50,
                justifyContent: 'center',
                paddingLeft: 15,
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold'}}>8:30 - 9:00am</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                borderColor: '#C6C6C6',
                borderWidth: 1,
                height: 50,
                justifyContent: 'center',
                paddingLeft: 15,
                flex: 1,
                marginRight: 10,
                borderRadius: 8,
              }}>
              <Text style={{fontWeight: 'bold'}}>9:00 - 9:30am</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                borderRadius: 8,
                borderColor: '#C6C6C6',
                borderWidth: 1,
                height: 50,
                justifyContent: 'center',
                paddingLeft: 15,
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold'}}>9:30 - 10:00am</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                borderColor: '#C6C6C6',
                borderWidth: 1,
                height: 50,
                justifyContent: 'center',
                paddingLeft: 15,
                flex: 1,
                marginRight: 10,
                borderRadius: 8,
              }}>
              <Text style={{fontWeight: 'bold'}}>10:00 - 10:30am</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                borderRadius: 8,
                borderColor: '#C6C6C6',
                borderWidth: 1,
                height: 50,
                justifyContent: 'center',
                paddingLeft: 15,
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold'}}>10:30 - 11:00am</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View
              style={{
                borderColor: '#C6C6C6',
                borderWidth: 1,
                height: 50,
                justifyContent: 'center',
                paddingLeft: 15,
                flex: 1,
                marginRight: 10,
                borderRadius: 8,
              }}>
              <Text style={{fontWeight: 'bold'}}>11:00 - 11:30am</Text>
            </View>
            <View
              style={{
                marginLeft: 10,
                borderRadius: 8,
                borderColor: '#C6C6C6',
                borderWidth: 1,
                height: 50,
                justifyContent: 'center',
                paddingLeft: 15,
                flex: 1,
              }}>
              <Text style={{fontWeight: 'bold'}}>11:30 - 12:00am</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 'auto',
              padding: 5,
              top: 50,
              borderRadius: 5,
              borderColor: '#C6C6C6',
            }}>
            <View style={{flex: 1}}>
              <Text style={{color: 'black'}}>Basic Charge</Text>
              <Text style={{color: 'black'}}>Tk. 500</Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                backgroundColor: 'gold',
                flex: 0.4,
                borderRadius: 5,
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('SuccessPage');
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>PROCEED</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* start  */}
        <View style={styles.bottomNavigation}>
          <View style={styles.bottomNavItem}>
            {/* <Image
              style={styles.bottomNavIcon}
              source={require('../../images/icon1.png')}
            /> */}
            <View>
              <Icon name="home" size={25} color="gold" />
            </View>
            <Text>Home</Text>
          </View>
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

export default ScheduleScreen;

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
  dateBox: {
    borderWidth: 1,
    borderColor: '#C6C6C6',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    height: 70,
    width: 75,
    borderRadius: 8,
  },
});
