import React, { Component, useContext, useState } from 'react';
import { StyleSheet, ScrollView , Modal, Pressable, Text, View, Alert } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const SignupScreen = ({onSignup}) => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [modalVisible, setModalVisible] = useState(false);
    return(
            <ScrollView backgroundColor='#FFF' contentContainerStyle={{flexGrow:1}}>
                <View style={styles.container}>
                <Text style={styles.text}>Create an account</Text>

                <FormInput
                    labelValue={fullname}
                    onChangeText={(userFullname) => setFullname(userFullname)}
                    placeholderText="Full Name"
                    iconType="user"
                    keyboardType="default"
                    autoCapitalize="words"
                    autoCorrect={false}
                />

                <FormInput
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Email Address"
                    iconType="mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <FormInput
                    labelValue={contact}
                    onChangeText={(userContact) => setContact(userContact)}
                    placeholderText="Contact Number"
                    iconType="phone"
                    keyboardType="phone-pad"
                />

                <FormInput
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholderText="Password"
                    iconType="lock"
                    secureTextEntry={true}
                />

                <FormInput
                    labelValue={confirmPassword}
                    onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
                    placeholderText="Confirm Password"
                    iconType="lock"
                    secureTextEntry={true}
                />

                <FormButton
                    buttonTitle="Sign Up"
                    onPress={onSignup}
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
                            <Text style={styles.modalText}>All the Terms of Service and Privacy Policies blablabalbalbalblbalbalblbalblblabal</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By registering, you confirm that you accept our
                    </Text>
                    <Pressable
                        onPress={() => setModalVisible(true)}>
                        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}> Terms of Service</Text>
                    </Pressable>
                    <Text style={styles.color_textPrivate}> and </Text>
                    <Pressable
                        onPress={() => setModalVisible(true)}>
                        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Privacy Policy</Text>
                    </Pressable>
                    <Text style={styles.color_textPrivate}>
                        .
                    </Text>
                </View>
                </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },
    navButton: {
        marginTop: 15
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
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
    buttonOpen: {
        backgroundColor: '#f194ff'
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

export default SignupScreen;