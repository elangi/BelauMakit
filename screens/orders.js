import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

import CategoryMenu from '../components/category-menu';
import { CATEGORIES } from '../data/dummy-data';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const OrdersScreen = props => {
    const renderGrid = (itemData) => {
        return(
            <CategoryMenu 
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

OrdersScreen.navigationOptions = {
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


export default OrdersScreen;