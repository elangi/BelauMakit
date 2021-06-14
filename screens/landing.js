import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import Landing from '../assets/TL.png';


import FormButton from '../components/FormButton';
import FormButton1 from '../components/FormButton1';

const Landingscreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.bgcontainer}>
                <Image source={Landing} style={styles.image}/>
            </View>
            <Text style={styles.h1}>Belau Makit</Text>
            <FormButton
                buttonTitle="Log In"
                onPress={()=> navigation.navigate('Login')}
                />
            <FormButton1
            buttonTitle="Sign Up"
            onPress={()=> navigation.navigate('Signup')}
            />
        </View>
    );
};

export default Landingscreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgcontainer: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0
    },
    h1: {
        left:8,
        color: '#fff',
        fontSize: 120,
        fontWeight: '700',
        fontFamily: 'Amita_700Bold',
        justifyContent: 'center',
        alignItems: 'center'
        }
});
