import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.demo}>
            <Text>Hey, there I am the splash screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    demo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;