import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const LogoutScreen = () => {
    return(
        <View style={styles.container}>
            <Text>This is my logout screen about what? I too don't know ay</Text>
        </View>
    );
};

export default LogoutScreen;