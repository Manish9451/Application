import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlatListData from './components/FlatListData';
import Mydata from './components/Mydata';
import Forms from './components/Forms';
import Products from './components/products';
import UpdateAndDelete from './components/UpdateAndDelete';
import { NativeBaseProvider, theme } from 'native-base';


const Tab = createBottomTabNavigator();

function App() {
  return(
<NativeBaseProvider theme={theme}>

<NavigationContainer>
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <Tab.Navigator>
        <Tab.Screen name="Products" component={Products} />
        
        <Tab.Screen name="CHATING" component={FlatListData} />

        <Tab.Screen name="Forms" component={Forms} />

        <Tab.Screen name="MyData" component={Mydata} />

        <Tab.Screen name="UpdateDelete" component={UpdateAndDelete} />

      </Tab.Navigator>
   </View>
 
  </NavigationContainer>
</NativeBaseProvider>
  
  )
  
}


export default App;
