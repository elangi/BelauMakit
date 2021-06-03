import React from 'react';
import {View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image, Text} from 'react-native';
import {windowHeight, windowWidth} from '../Dimension/Dimension';


import Bento from '../../assets/bento.png';
import Breakfast from '../../assets/breakfast.png';
import Drink from '../../assets/coconut.png';
import Dessert from '../../assets/sweets.png';
import Odoim from '../../assets/thanksgiving.png';
import Ongraol from '../../assets/sweetpotato.png';
import Yasai from '../../assets/spinach.png';
import Fruits from '../../assets/bananas.png';

import {
  useFonts,
  MarkaziText_400Regular,
  MarkaziText_500Medium,
  MarkaziText_600SemiBold,
  MarkaziText_700Bold,
} from '@expo-google-fonts/markazi-text';

import {
  RobotoSlab_400Regular
} from '@expo-google-fonts/roboto';

const Category = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        MarkaziText_400Regular,
        MarkaziText_600SemiBold,
        MarkaziText_700Bold,
        RobotoSlab_400Regular
    }); if (!fontsLoaded) {
        return <View><Text>Not loaded</Text></View>;
    } else 
    return(
        <View style={styles.container}>
            <View style={styles.category}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.navigate('product')}>
                        <Image source={Bento} style={styles.icon} />
                        <Text style={styles.catText}>Bento</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                        <Image source={Breakfast} style={styles.icon}/>                
                        <Text style={styles.catText}>Breakfast</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('makitdetail')}>
                        <Image source={Drink} style={styles.icon}/>
                        <Text style={styles.catText}>Drinks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('products')}>
                        <Image source={Fruits} style={styles.icon}/>
                        <Text style={styles.catText}>Fruits</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                        <Image source={Odoim} style={styles.icon}/>
                        <Text style={styles.catText}>Protein</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('products')}>
                        <Image source={Dessert} style={styles.icon}/>
                        <Text style={styles.catText}>Snacks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('logout')}>
                        <Image source={Ongraol} style={styles.icon}/>
                        <Text style={styles.catText}>Starch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('products')}>
                        <Image source={Yasai} style={styles.icon}/>
                        <Text style={styles.catText}>Veggies</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    category: {
        // backgroundColor: '#ccc',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: 5,
        marginRight: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        marginTop: 25,
        height: 50,
        width: 50,
        margin: 8,
        marginLeft: 12
    },
    catText: {
        fontSize: 18,
        fontFamily: 'MarkaziText_400Regular',
        fontWeight: '500',
        textAlign: 'center',
        width: 58,
        marginLeft: 8,
        marginRight: 8
    },
    makitTitle: {
        flexDirection: 'row',
        alignItems:'center'
    },
    allMakit: {
        // fontFamily: 'MarkaziText_700Bold',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 24,
        fontWeight: '700',
        marginLeft: 22,
        marginTop: 10,
        marginBottom: 10
    },
    search: {
        marginLeft: '40%'
    },
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
