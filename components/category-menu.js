import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Platform, TouchableNativeFeedback} from 'react-native';
import {windowHeight, windowWidth} from './Dimension';
import { CATEGORIES } from '../data/dummy-data';

const Category = props => {
    let TouchableComp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >=21) {
        TouchableComp = TouchableNativeFeedback;
    }
    return(
        <View style={styles.category}>
            <TouchableComp
                style={{flex:1}}
                onPress={props.onSelect}>
                    <View style={{...styles.container}}>
                        <Text style={styles.title} numberOfLines={8}>{props.title}</Text>
                    </View>
                </TouchableComp>
            {/* <View style={styles.category1}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.navigate('product')}>
                        <Image source={Bento} style={styles.icon} />
                        <Text style={styles.catText}>Bento</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View> */}
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    category: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#111',
        shadowOpacity: 0,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
    // container: {
    //     backgroundColor: '#fff',
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // category1: {
    //     // backgroundColor: '#ccc',
    //     height: 120,
    //     flexDirection: 'row',
    //     justifyContent: 'space-evenly',
    //     marginLeft: 5,
    //     marginRight: 5,
    // },
    // searchContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    // },
    // icon: {
    //     marginTop: 25,
    //     height: 50,
    //     width: 50,
    //     margin: 8,
    //     marginLeft: 12
    // },
    // catText: {
    //     fontSize: 18,
    //     fontFamily: 'MarkaziText_400Regular',
    //     fontWeight: '500',
    //     textAlign: 'center',
    //     width: 58,
    //     marginLeft: 8,
    //     marginRight: 8
    // },
    // makitTitle: {
    //     flexDirection: 'row',
    //     alignItems:'center'
    // },
    // allMakit: {
    //     // fontFamily: 'MarkaziText_700Bold',
    //     justifyContent: 'center',
    //     alignItems: 'flex-start',
    //     fontSize: 24,
    //     fontWeight: '700',
    //     marginLeft: 22,
    //     marginTop: 10,
    //     marginBottom: 10
    // },
    // search: {
    //     marginLeft: '40%'
    // },
    // makitList: {
    //     // backgroundColor: '#ccc',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     alignItems: 'center',
    //     width: windowWidth,
    //     justifyContent: 'space-evenly',
    // },
    // makitIcon: {
    //     height: 100,
    //     width: 175,
    //     flexDirection: 'row'
    // },
    // makitName: {
    //     fontFamily: 'MarkaziText_700Bold',
    //     // marginTop: 10,
    //     fontSize: 26,
    //     fontWeight: '600',
    //     textAlign: 'left',
    // },
    // makitLocation: {
    //     // fontFamily: 'MarkaziText_400Regular',
    //     fontFamily: 'RobotoSlab_400Regular',
    //     marginBottom:15,
    //     fontSize: 14,
    //     fontWeight: '400',
    //     textAlign: 'left',
    //     marginTop: -5
    // }
});
