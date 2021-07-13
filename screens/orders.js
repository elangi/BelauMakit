import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import CategoryList from '../components/category-list';
import { CATEGORIES } from '../data/dummy-data';

const Orders = props => {
    const renderGrid = (itemData) => {
        return(
            <CategoryList 
                title={itemData.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'Home',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };
    return(
        <FlatList data={CATEGORIES} renderItem={renderGrid} numColumn={8} contentContainerStyle={styles.full}/>
    );
};

Orders.navigationOptions = {
    headerTitle: 'Test test test',
    headerStyle: {
        backgroundColor: '#e8debd'
    },
    headerTintStyle: '#ccc'
};

const styles = StyleSheet.create({
    full: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Orders;