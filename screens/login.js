import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Modal, Pressable, TouchableOpacity, Text, View } from 'react-native';
import { Roboto_400Regular, Roboto_900Black, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { useFonts, MarkaziText_400Regular, MarkaziText_600SemiBold, MarkaziText_700Bold } from '@expo-google-fonts/markazi-text';

import FormInput from '../components/FormInput/FormInput';
import FormInput1 from '../components/FormInput1';
import FormButton from '../components/FormButton/FormButton';

const LoginScreen = ({onLogin, navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [forgetPassword, setForgetPassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    let [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        Roboto_900Black,
        RobotoSlab_400Regular,
        MarkaziText_400Regular,
        MarkaziText_600SemiBold,
        MarkaziText_700Bold,
    }); if (!fontsLoaded) {
        return <View><Text>Not loaded</Text></View>;
    } else 
    return(
            <View style={styles.container}>
                <StatusBar style='auto'/>
                <View style={styles.title}>
                    <Text style={styles.titletext}>Log in</Text>
                </View>
                <View style={styles.centerContainer}>
                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        placeholderText="Email Address"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.input}
                    />

                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                        style={styles.input}
                    />

                    <Modal
                        animationType = {'slide'}
                        transparent={false}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal is closure.');
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Forget your password? Les change it rq. Enter your email address:</Text>
                                <FormInput1
                                    labelValue={forgetPassword}
                                    onChangeText={(userForget) => setForgetPassword(userForget)}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                />

                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        onPress={() => setModalVisible(true)}>
                        <Text style={[styles.forget]}>Forgot password?</Text>
                    </Pressable>

                    <FormButton
                    buttonTitle="Log In"
                    onPress={onLogin}
                    />

                    
                    <TouchableOpacity style={styles.forgotButton}>
                        <Text style={styles.navButtonText} onPress={() => navigation.navigate('Signup')}>
                            Don't have an account? Sign up here
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};

export default LoginScreen; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: '15%',
        // marginTop: '10%'
    },
    titletext: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 36,
        marginBottom: '10%',
        // color: '#051d5f',
        color: '#FFB400',
        fontWeight: '500',
    },
    centerContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    input: {
        fontFamily:'Roboto_400Regular'
    },
    forgotButton: {
        marginVertical: 35
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        // color: '#2E64EF'
        color: '#E88832'
    },
    forget: {
        fontSize: 14,
        fontWeight: '400',
        color: '#E88832',
        marginBottom: 20,
        marginLeft: '50%'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4, 
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: '#2196f3'
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});