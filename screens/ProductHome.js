import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MAKITS, PRODUCTS } from '../data/dummy-data';
import MakitList from '../components/makit-list';
import HomeScreen from './HomeScreen';

const ProductHome = props => {
    const renderMakit = itemData => {
    return(
        <MakitList
            title={itemData.item.title}
            image={itemData.item.image}
            vendor={itemData.item.vendor}
            price={itemData.item.price}
            onSelectProduct={() => {}}
        />
    )};

    const catId = props.navigation.getParam('categoryId');

    const displayedProducts = PRODUCTS.filter(product => product.categoryIds.indexOf(catId) >= 0);

    return(
        <View style={styles.screen}>
            <FlatList
                data={displayedProducts}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMakit}
                style={{width: '100%'}}
            />
        </View>
    )
};


HomeScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return{
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductHome;