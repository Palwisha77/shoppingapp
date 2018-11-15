import React, {Component} from 'react';
import {StyleSheet,AsyncStorage, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import {Header,Left,Right,Icon,Button,Body,Title,List,ListItem,FlatList} from 'native-base';
import Note from '../components/Note';
 
class ItemList extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name = "list" style ={{ fontSize:24, color: tintColor}}
       />
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
});
}

// renderItem = ({item})=>{
//   return(
//     <Text>{item.note}</Text>
//   )
// }

// async loadItems() {
//   await fetch('http://10.0.3.2:4000/api/load')
//   .then((items)=> items.json())
//   .then((responseJason) => {
//       this.setState ({
//         list: responseJason.data
//       })
//     })
//       .catch((error)=>{
//         console.log(error)
//       })

// }


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
            <Title style={{alignItems:'center', justifyContent:'center' }} >Items</Title>
          </Body>
      </Header>
         
    <List>
        {this.list.map((items,index) => {
          console.log(items);
           return (
               <ScrollView>
                 <TouchableOpacity>
                   <ListItem key={'listitem'+index}>
                    <Text key={'itemtext'+index}>{items.data}</Text>
                   </ListItem>
                 </TouchableOpacity>
              </ScrollView>
)
})}
    </List>

{/* <FlatList
  data={this.state.list}
  renderItem={this.renderItem}
  keyExtractor={(item,index)=> index}
/> */}

    </View>
     
)};
}     

export default ItemList;

const styles = StyleSheet.create({
container: {
    flex: 1,
},
header:{
    backgroundColor: '#EFC22A',
},
});
