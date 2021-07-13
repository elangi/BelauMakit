import React, { useCallback, memo, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';

import FormInput2 from '../components/FormInput2';
import CategoryList from '../components/category-list';
import MakitList from '../components/makit-list';
import { CATEGORIES, MAKITS } from '../data/dummy-data';
import { windowWidth, windowHeight } from '../components/Dimension';
import { HeaderButton, Item } from 'react-navigation-header-buttons';

const Home1 = props => {
    const renderHome = (itemData) => {
        return (
          //Category to be added
          <MakitList
              title={itemData.item.title}
              onSelect={() => {
                  props.navigation.navigate({
                      routeName: 'ProductHome',
                      params: {
                          categoryId: itemData.item.id
                      }
                  });
              }}
          />
        );
    };
    return (
      <View style={styles.screen}>
        <FlatList data={MAKITS} renderItem={renderHome} numColumns={2} contentContainerStyle={styles.all}/>
      </View>
    );
};

Home1.navigationOptions = navData => {
    return {
        headerTitle: 'Belau Makit',
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#E8DEBD' : '#FF80000'
        },
        headerTintColor: Platform.OS === 'ios' ? '#E8DEBD' : '#FF80000',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent = {HeaderButton}>
              <Item 
                title='Menu'
                iconName='ios-menu'
                onPress={() => { navData.navigation.toggleDrawer();
                }}
                />
            </HeaderButtons> 
    }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  all: {
    backgroundColor: '#FFF'
  }
});

export default Home1;