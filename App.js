import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute, DrawerActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { AntDesign, Entypo, Ionicons, FontAwesome, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Amita_700Bold } from '@expo-google-fonts/amita';
import { Roboto_400Regular, Roboto_900Black, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { useFonts, MarkaziText_400Regular, MarkaziText_600SemiBold, MarkaziText_700Bold } from '@expo-google-fonts/markazi-text';
// import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';

import LandingScreen from './screens/landing';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import ProductScreen from './screens/product';
import OrdersScreen from './screens/orders';
import LogoutScreen from './screens/logout';
import MapScreen from './screens/map';
import LegalScreen from './screens/legal';

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'Amita': require('./assets/Amita-Bold.ttf'),
//     'Markazi': require('./assets/MarkaziText-SemiBold.ttf')
//   });
// };

enableScreens();

const Drawer = createDrawerNavigator();
const HomeDrawer = () => {
  return(
    <Drawer.Navigator
      initialRouteName="Belau Makit"
    >
      <Drawer.Screen name = "Belau Makit"  component={HomeScreen}  options= {{
        title: 'Home',
        drawerIcon: ({focused}) => (
          <Ionicons name="ios-home-outline" size={25}  color={focused ? '#7cc' : '#E88832'}/>
        )
      }}/>
      <Drawer.Screen name = "Map" component={MapScreen} options= {{
        title: 'Map',
        drawerIcon: ({focused}) => (
          <Ionicons name="map-outline" size={25} color={focused ? '#7cc' : '#E88832'}/>
        )
      }}/>
      <Drawer.Screen name = "Orders" component={OrdersScreen} options= {{
        title: 'Orders',
        drawerIcon: ({focused}) => (
          <Ionicons name="ios-receipt-outline" size={25} color={focused ? '#7cc' : '#E88832'}/>
        )
      }}/>
      <Drawer.Screen name = "Settings" component={LegalScreen} options= {{
        title: 'Settings',
        drawerIcon: ({focused}) => (
          <Ionicons name="settings-outline" size={25} color={focused ? '#7cc' : '#E88832'}/>
        ),
      }}/>
      <Drawer.Screen name = "Logout" component={LogoutScreen} options= {{
        title: 'Logout',
        drawerIcon: ({focused}) => (
          <AntDesign name="logout" size={25} color={focused ? '#7cc' : '#E88832'} />
        )
      }}/>
    </Drawer.Navigator>
  );
};

const RootStack = createStackNavigator();
const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  // const [dataLoaded, setDataLoaded] = useState(false);

  // if(!dataLoaded) {
  //   return(
  //     <AppLoading startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}/>
  //   )
  // }

  let [fontsLoaded] = useFonts({
    Amita_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
    RobotoSlab_400Regular,
    MarkaziText_400Regular,
    MarkaziText_600SemiBold,
    MarkaziText_700Bold,
  }); 
  if (!fontsLoaded) {
    return <AppLoading/>;
  } else 

  return(
    <NavigationContainer>
      <RootStack.Navigator>
        {isAuthenticated ? (
          <RootStack.Screen name = "Belau Makit" component={HomeDrawer} options={({ route, navigation }) => ({
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerLeft: () => (
              <View style={{marginLeft: 20 }}>
                <Entypo name="menu" size={40} color="#FFB400" backgroundColor="#fff" title="" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
              </View>
            ),
            headerRight: () => (
              <View style={{marginRight: 20 }}>
              <AntDesign name="shoppingcart" size={35} color="#FFB400" backgroundColor="#fff" title="" onPress={handleLogout}/>
              </View>
            ),
            title: "Belau Makit",
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize: 26,
              alignSelf: 'center'
            },
            headerStyle: {
              height: 100,
              shadowColor: 'transparent' 
            }
          })}
          />
        ) : (
          <>
          <RootStack.Screen name = "Landing" component={LandingScreen} options={{
            animationTypeForReplace: 'pop',
            headerShown: false,
          }}
          />
          <RootStack.Screen name = "Login" options={{headerShown:false}}>
            {(props) => (
              <LoginScreen {...props} onLogin={handleLogin}/>
            )}
          </RootStack.Screen>
          <RootStack.Screen name = "Signup" options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: '#fff',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 30, marginTop: 30}}>
                <AntDesign name='arrowleft' size={30} 
                backgroundColor='#fff'
                color='#333' outline='none'
                onPress={() => navigation.navigate('Login')}
                />
                <Text style={{fontSize: 20, flexDirection: 'row'}}>Login</Text>
              </View>
            ),
          })}>
            {(props) => (
              <SignupScreen {...props} onSignup={handleSignup}/>
            )}
          </RootStack.Screen>
          <RootStack.Screen name = "Product" options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#fff',
              shadowColor: '#fff',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 20}}>
                <AntDesign name='arrowleft' size={30} 
                backgroundColor='#fff'
                color='#333' outline='none'
                onPress={() => navigation.navigate('Home')}
                />
              </View>
            ),
          })}>
          {(props) => (
            <HomeScreen {...props} onPress={() => navigation.navigate('Product')}/>
          )}
        </RootStack.Screen>
        <RootStack.Screen name = "MakitDetail" options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 20}}>
              <AntDesign name='arrowleft' size={30} 
              backgroundColor='#fff'
              color='#333' outline='none'
              onPress={() => navigation.navigate('Product')}
              />
            </View>
            ),
          })}>
          {(props) => (
            <ProductScreen {...props} onPress={() => navigation.navigate('MakitDetail')}/>
          )}
        </RootStack.Screen>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;