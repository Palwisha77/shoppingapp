/**
 * start screen
 
 */

import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import MyListScreen from './source/screens/MyListScreen';
import ListScreen from './source/screens/ListScreen';
import NewListScreen from './source/screens/NewListScreen';


const {width} = Dimensions.get('window')
export default class App extends React.Component {
  render() {
    return (
    <DrawerNavigator/>
    );
  }
}
const CustomDrawerComponent = (props) => (
  <SafeAreaView styles={ {flex: 1 }}>
  <View style={{height:150,backgroundColor: 'White'}}></View>
  <ScrollView>
    <DrawerItems {...props }/>
    
  </ScrollView>
  
  </SafeAreaView>
)
const DrawerNavigator = createDrawerNavigator({
  Home: ListScreen,
  Newlist: NewListScreen,
  Mylist: MyListScreen,
},{
  contentComponent: CustomDrawerComponent,
  drawerwidth: width,
  contentOptions: {
    activeTintColor: 'orange'
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
 
});
