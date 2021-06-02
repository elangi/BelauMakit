import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const LegalScreen = () => {
    return(
        <View style={styles.container}>
            <Text>This that screen about legal stuff holmes</Text>
        </View>
    );
};

export default AboutScreen;