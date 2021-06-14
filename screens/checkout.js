import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const CheckoutScreen = () => {
    return(
        <View style={styles.container}>
            <Text>This is my checkout and I shall buy whatever I want to buy boiiii</Text>
        </View>
    );
};

export default CheckoutScreen;