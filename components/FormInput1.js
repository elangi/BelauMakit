import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from './Dimension/Dimension';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={labelValue}
                style={styles.input}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                textAlign='center'
                {...rest}/>

        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 15,
        marginBottom: 20,
        width: '100%',
        height: windowHeight / 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    input: {
        padding: 10, 
        flex: 1,
        fontSize: 16,
        color: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});