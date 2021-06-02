import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ResetScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Forgot me password, lemme reset it rq</Text>
        </View>
    );
};

export default ResetScreen;