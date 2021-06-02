import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const DataScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Here is all the data of all the restaurants, the product lists, and all about the makit</Text>
        </View>
    );
};

export default DataScreen;