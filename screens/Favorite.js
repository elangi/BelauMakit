import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorite = () => {
    return(
        <View style={styles.container}>
            <Text>This is my favourites and I shall fav whatever I want to fav boiiii</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Favorite;