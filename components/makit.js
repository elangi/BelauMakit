import React, { useCallback, memo, useRef, useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { useFonts, MarkaziText_400Regular, MarkaziText_600SemiBold, MarkaziText_700Bold } from '@expo-google-fonts/markazi-text';

import Makit1 from '../assets/R1.png';
import Makit2 from '../assets/R2.png';
import Makit3 from '../assets/R3.png';
import Makit4 from '../assets/R4.png';
import { windowWidth } from './Dimension/Dimension';



const HomeScreen = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        MarkaziText_400Regular,
        MarkaziText_600SemiBold,
        MarkaziText_700Bold,
        RobotoSlab_400Regular
    }); if (!fontsLoaded) {
        return <View><Text>Not loaded</Text></View>;
    } else 
    return(
        <View style={styles.makitList}>
            <Container>
                
            </Container>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit1} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #1</Text>
                <Text style={styles.makitLocation}>Ngermetengel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit2} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #2</Text>
                <Text style={styles.makitLocation}>Imeong</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit3} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #3</Text>
                <Text style={styles.makitLocation}>Dngeronger</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit4} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #4</Text>
                <Text style={styles.makitLocation}>Medalaii</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit1} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #5</Text>
                <Text style={styles.makitLocation}>Karmeliang</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit2} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #6</Text>
                <Text style={styles.makitLocation}>Ngermasech</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit3} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #7</Text>
                <Text style={styles.makitLocation}>Ngerutoi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit4} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #8</Text>
                <Text style={styles.makitLocation}>Ordomel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit1} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #9</Text>
                <Text style={styles.makitLocation}>Kloulklubed</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                <Image source={Makit2} style={styles.makitIcon}/>
                <Text style={styles.makitName}>Makit #10</Text>
                <Text style={styles.makitLocation}>Ngermechau</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    makitList: {
        // backgroundColor: '#ccc',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: windowWidth,
        justifyContent: 'space-evenly',
    },
    makitIcon: {
        height: 100,
        width: 175,
        flexDirection: 'row'
    },
    makitName: {
        fontFamily: 'MarkaziText_700Bold',
        // marginTop: 10,
        fontSize: 26,
        fontWeight: '600',
        textAlign: 'left',
    },
    makitLocation: {
        // fontFamily: 'MarkaziText_400Regular',
        fontFamily: 'RobotoSlab_400Regular',
        marginBottom:15,
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
        marginTop: -5
    }
});
