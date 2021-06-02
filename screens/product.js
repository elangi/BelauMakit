import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ProductScreen = () => {
    return(
        <View style={styles.container}>
            <Text>All these products and you still looking for other things? Bro.</Text>
        </View>
    );
};

export default ProductScreen;