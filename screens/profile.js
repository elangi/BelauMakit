import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Profile = () => {
    return(
        <View style={styles.container}>
            <Text>This is my screen about my profile or what why do i even have this ay</Text>
        </View>
    );
};

export default Profile;