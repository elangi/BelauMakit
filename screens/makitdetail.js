import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MAKITS } from '../data/dummy-data';
import MakitList from '../components/makit-list';

const MakitDetail = props => {
    const renderMakit = itemData => {
    return(
        <MakitList
            title={itemData.item.title}
        />
        // <View style={styles.container}>
        //     <Text>Stuff stuff</Text>
        // </View>
    )};
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MakitDetail;