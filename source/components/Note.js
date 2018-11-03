
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ScrollView, TextInput} from 'react-native';
import {Icon, Button, Right,} from 'native-base';




class Note extends Component {

 
  render() {
    return (
    
      <View  key={this.props.keyval} style={styles.notes}>
        <Text style={styles.noteText}>{this.props.val.edit}</Text>
        <Text style={styles.noteText}>{this.props.val.delete}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Icon type="FontAwesome" name = "remove" style ={{ fontSize:20, color: 'red'}} />
        </TouchableOpacity>

{/* <TouchableOpacity onPress={this.props.editMethod} style={styles.noteEdit}>
 <Icon type="FontAwesome" name = "edit" style ={{ fontSize:20, color: 'green'}} />
 </TouchableOpacity> */} */}
     
      </View>
    );
  }
}

export default Note;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    note:{
        position:'relative',
        padding:20,
        paddingRight:100,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
    },
    noteText:{
        paddingLeft:10,
        fontSize: 20,
      borderBottomWidth: 3,
      borderBottomColor: '#C9BEC2',
    },
   
    noteDelete: {
        position: 'absolute',
        alignItems:'center',
        justifyContent: 'center',
        bottom:10,
        top:10,
        right:10,
        padding:10,
    },

  //   noteEdit: {
  //     position: 'absolute',
  //     alignItems:'center',
  //     justifyContent: 'center',
  //     bottom:10,
  //     top:10,
  //     right:10,
  //     padding:10,
  // },

    
    
   
  });