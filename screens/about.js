import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AboutScreen = () => {
    return(
        <View style={styles.container}>
            <Text>This is my about screen about what? I too don't know ay</Text>
        </View>
    );
};

export default AboutScreen;