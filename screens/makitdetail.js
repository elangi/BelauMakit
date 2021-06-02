import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const MakitDetailScreen = () => {
    return(
        <View style={styles.container}>
            <Text>what you like know about these makits boi</Text>
        </View>
    );
};

export default MakitDetailScreen;