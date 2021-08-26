import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/colors/colors';

const SlideScreen = () => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <ScrollView>
          <Image
            style={styles.imageStyle}
            source={require('../assets/images/team.jpeg')}
          />
          <StatusBar translucent={true} backgroundColor={Colors.transparent} />
          <View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{color: Colors.grey}}>Welcome to Hinny!</Text>
              <View style={styles.header}>
                <View>
                  <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                    Register Here
                  </Text>
                </View>
                <Text style={{paddingVertical: 7, color: Colors.blue}}>
                  Help
                </Text>
              </View>
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{color: Colors.grey, paddingBottom: 10}}>
                Phone Number
              </Text>
              <View style={styles.contactContainer}>
                <TextInput placeholder="Eg. 47812542" />
              </View>
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{color: Colors.grey, paddingBottom: 10}}>
                Full Name
              </Text>
              <View style={styles.contactContainer}>
                <TextInput placeholder="Steve Jobs" />
              </View>
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{color: Colors.grey, paddingBottom: 10}}>
                Gender
              </Text>
              <View style={styles.contactContainer}>
                <TextInput placeholder="Male or Female" />
              </View>
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{color: Colors.grey, paddingBottom: 10}}>
                Password
              </Text>
              <TextInput placeholder="********" />
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{color: Colors.grey, paddingBottom: 10}}>
                Confirm Password
              </Text>
              <TextInput placeholder="********" />
            </View>
          </View>
          <View style={styles.registerButtonContainer}>
            <Text style={styles.registerButton}>Complete Registration</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  imageStyle: {
    width: '100%',
    height: 200,

  },
  SigninContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  contactContainer: {
    height: 50,
    marginRight: 20,
    flexDirection: 'row',
    backgroundColor: Colors.light,
  },
  registerButtonContainer: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
  },
  registerButton: {
    color: Colors.white,
    fontSize: 16,
  }
});

export default SlideScreen;