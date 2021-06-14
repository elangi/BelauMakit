import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './Dimension';

import Ionicons from 'react-native-vector-icons/Ionicons';

const FormInput2 = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <Ionicons name={iconType} size={25} color="#666"/>
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}/>
        </View>
    );
};

export default FormInput2;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 15,
        width: '85%',
        height: windowHeight / 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E4E4E4',
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center'
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        width: 50,
    },
    input: {
        padding: 10, 
        flex: 1,
        fontSize: 18,
        color: '#666',
    },
});