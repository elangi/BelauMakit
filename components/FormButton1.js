import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from './Dimension/Dimension';

const FormButton1 = ({buttonTitle, ...rest}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default FormButton1;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        width: '90%',
        height: windowHeight / 15,
        backgroundColor: '#FFF',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111'
    }
});