import React, { useState, useEffect } from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, StatusBar, TextInput, ScrollView, Pressable} from 'react-native';
import Colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Voice from 'react-native-voice';

const CompleteRegisteration =( { navigation } ) => {

const [pitch, setPitch] = useState('');
const [error, setError] = useState('');
const [end, setEnd] = useState('');
const [started, setStarted] = useState('');
const [results, setResults] = useState('');
const [partialResults, setPartialResults] = useState([]);

useEffect(() => {
  Voice._onSpeechStart = onSpeechStart;
  Voice._onSpeechEnd = onSpeechEnd;
  Voice.onSpeechError = onSpeechError;
  Voice.onSpeechResults = onSpeechResults;
  Voice.onSpeechPartialResults = onSpeechPartialResults;

  return () => {
    Voice.destroy().then(Voice.removeAllListeners);
  }
}, []);

const onSpeechStart = (e) => {
  console.log('onSpeechStart', e);
  setStarted('worked');
}

 const onSpeechEnd = e => {
   //Invoked when SpeechRecognizer stops recognition
   console.log('onSpeechEnd: ', e);
   setEnd('√');
 };

 const onSpeechError = e => {
   //Invoked when an error occurs.
   console.log('onSpeechError: ', e);
   setError(JSON.stringify(e.error));
 };

 const onSpeechResults = e => {
   //Invoked when SpeechRecognizer is finished recognizing
   console.log('onSpeechResults: ', e);
   setResults(e.value);
 };

 const onSpeechPartialResults = e => {
   //Invoked when any results are computed
   console.log('onSpeechPartialResults: ', e);
   setPartialResults(e.value);
 };

const startRecording = async () => {
  try {
    await Voice.start('en-US');
    setPitch('');
    setError('');
    setStarted('');
    setResults('');
    setPartialResults('');
    setEnd('');
  } catch (e) {
    console.error(e);
  }
}

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <StatusBar translucent={true} backgroundColor={Colors.transparent} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Secuirty Information</Text>
              <Text style={styles.infoText}>
                Lorem Ipsum is simply dummy text
              </Text>
              <Text style={styles.infoText}>
                of the printing and typesetting industry Ipsum
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 10,
                  marginLeft: 20,
                  fontWeight: 'bold',
                }}>
                Continue Registration
              </Text>
            </View>
            <View style={styles.securityForm}>
              <View>
                <Text style={{marginBottom: 10}}>Add Emergency Contact 1</Text>
                <View style={styles.addContact}>
                  <Icon name="person-add-alt" size={25} color={Colors.dark} />
                  <TextInput placeholder="Please add first emergency contact" />
                </View>
              </View>
              <View>
                <Text style={{marginBottom: 10}}>Add Emergency Contact 2</Text>
                <View style={styles.addContact}>
                  <Icon name="person-add-alt" size={25} color={Colors.dark} />
                  <TextInput placeholder="Please add second emergency contact" />
                </View>
              </View>
              <View>
                <Text style={{marginBottom: 10}}>Add Emergency Contact 3</Text>
                <View style={styles.addContact}>
                  <Icon name="person-add-alt" size={25} color={Colors.dark} />
                  <TextInput placeholder="Please add third emergency contact" />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                  backgroundColor: Colors.light,
                  padding: 15,
                }}>
                <Text>Voice recognition for emergencies:</Text>
                <Pressable onLongPress={startRecording}>
                  <View style={styles.voiceButtonContainer}>
                    <Icon name="keyboard-voice" size={30} color={Colors.red} />
                  </View>
                </Pressable>
              </View>
              <Pressable
                onPress={() =>
                  navigation.navigate('HomeScreen', {name: 'HomeScreen'})
                }>
                <View style={styles.registerButtonContainer}>
                  <Text style={{color: Colors.white, fontSize: 16}}>
                    Complete Registration
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
    
    const styles = StyleSheet.create({
      headerContainer: {
        width: '100%',
        height: 200,
        backgroundColor: Colors.blue,
      },
      headerText: {
        marginTop: 60,
        marginBottom: 10,
        paddingLeft: 20,
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.white,
      },
      infoText: {
        color: Colors.white,
        marginLeft: 20,
      },
      securityForm: {
        marginHorizontal: 20,
        marginTop: 20,
      },
      addContact: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: Colors.light,
        alignItems: 'center',
        marginBottom: 15,
      },
      voiceButtonContainer: {
        paddingLeft: 50,
      },
      registerButtonContainer: {
        padding: 15,
        marginTop: 20,
        backgroundColor: Colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 15,
      },
    });

export default CompleteRegisteration;