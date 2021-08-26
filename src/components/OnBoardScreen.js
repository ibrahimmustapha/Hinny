import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
  Pressable
} from 'react-native';
import Colors from '../assets/colors/colors';

const OnBoardScreen = ({ navigation }) => {
    return (
      <SafeAreaView>
        <StatusBar translucent={true} backgroundColor={Colors.transparent} />
        <Image
          style={styles.image}
          source={require('../assets/images/safe1.jpeg')}
        />
        <View style={{marginLeft: 20, marginTop: 40}}>
          <View>
            <Text style={styles.title}>Let's help you</Text>
            <Text style={styles.title}>Be safe</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.text}>We are hinny and</Text>
            <Text style={styles.text}>Your safety our priority</Text>
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate('Authentication', {name: 'Authentication'})}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </View>
        </Pressable>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 380,
    borderBottomLeftRadius: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.grey,
    marginTop: 3,
  },
  buttonContainer: {
    backgroundColor: Colors.blue,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
      color: Colors.white,
  }
});

export default OnBoardScreen;