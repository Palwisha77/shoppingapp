/**
 * my  list screen
 
 */

import React, {Component} from 'react';
import {StyleSheet,AsyncStorage, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import {Header,Left,Right,Icon,Button,Body,Title} from 'native-base';

 
class MyListScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
     
        <Icon name = "list" style ={{ fontSize:24, color: tintColor}} />
        
    )
}


constructor(props) {
  super(props);

  this.loadItems = this.loadItems.bind(this);
}

async loadItems() {
  await fetch('http://192.168.100.137/api/load').then(items => {
    console.log(items);
  })  
}

componentDidMount() {
  this.loadItems();
}


  render() {
   
  
    return (
     
      <View style={styles.container}>
         <Header  style ={styles.header}>
         <Left>
           <Button transparent>
             <Icon name="arrow-back"   onPress= {()=> this.props.navigation.openDrawer()}/>
             </Button>
         </Left>
          <Body>
            <Title style={{alignItems:'center', justifyContent:'center'}}>My List</Title>
          </Body>
         </Header>
      
      
      
           
        
        
      </View>
     
    
  );
}


 
  

// getData(){
  
//  AsyncStorage.getItem('notes').then(items => {
//    this.setState({notesArray:items});
//  })
//  }


}     
export default MyListScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#EFC22A',
  },

})
