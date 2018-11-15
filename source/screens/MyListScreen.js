import React, {Component} from 'react';
import {StyleSheet,AsyncStorage, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import {Header,Left,Right,Icon,Button,Body,Title,List,ListItem} from 'native-base';
import ItemList from './ItemList';
 
class MyListScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
     <Icon name = "list" style ={{ fontSize:24, color: tintColor}} />
)}

constructor(props) {
  super(props);
    this.state = {refresh: false}
    this.list = [];
    this.loadItems = this.loadItems.bind(this);
}

async loadItems() {
  await fetch('http://10.0.3.2:4000/api/load')
  .then(items => {
  items.json().then(list => {
  this.list = list;
    console.log(this.list);
})
})
}

componentDidMount() {
  this.loadItems();
  setTimeout(function(){
    this.setState({refresh: true})
  }.bind(this),2000)
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


    <List>
        {this.list.map((items,index) => {
          console.log(items);
            return (
              <ScrollView>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemList')}>
                <ListItem key={'listitem'+index}>
                   <Text key={'itemtext'+index}>{items.title}</Text>
                </ListItem>
                </TouchableOpacity>
              </ScrollView>
)
})}
    </List>
    
    </View>
)};
}     

export default MyListScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
  },
header:{
    backgroundColor: '#EFC22A',
  },
});
