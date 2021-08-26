import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar, TextInput, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../assets/colors/colors';

const SlideScreen = ({ navigation }) => {
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
                <Text style={{paddingVertical: 7, color: Colors.blue, marginRight: -160}}>
                  Help
                </Text>
                <Icon style={{paddingVertical: 4}}name="help" size={25} color={Colors.blue} />
              </View>
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{color: Colors.grey, paddingBottom: 10}}>
                Phone Number
              </Text>
              <View style={styles.contactContainer}>
                <Text>+81</Text>
                <Icon
                  name="keyboard-arrow-down"
                  size={25}
                  color={Colors.dark}
                />
                <TextInput
                  keyboardType="numeric"
                  maxLength={10}
                  placeholder="Eg. 47812542"
                />
              </View>
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{color: Colors.grey, paddingBottom: 10}}>
                Full Name
              </Text>
              <View style={styles.contactContainer}>
                <Icon name="person-outline" size={25} color={Colors.dark} />
                <TextInput placeholder="Steve Jobs" />
              </View>
            </View>
            <View style={{marginLeft: 20, marginTop: 20}}></View>
            <View style={{marginLeft: 20, marginTop: 0}}>
              <Text style={{color: Colors.grey, paddingBottom: 10}}>
                Password
              </Text>
              <View style={styles.contactContainer}>
                <Icon name="lock-outline" size={25} color={Colors.dark} />
                <TextInput secureTextEntry={true} placeholder="********" />
              </View>
            </View>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate('CompleteRegisteration', {
                name: 'CompleteRegisteration',
              })
            }>
            <View style={styles.registerButtonContainer}>
              <Text style={styles.registerButton}>Continue</Text>
            </View>
          </Pressable>
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
    alignItems: 'center',
    backgroundColor: Colors.light,
    paddingLeft: 10,
    borderColor: Colors.dark,
  },
  registerButtonContainer: {
    backgroundColor: Colors.blue,
    borderRadius: 5,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  registerButton: {
    color: Colors.white,
    fontSize: 16,
  }
});

export default SlideScreen;