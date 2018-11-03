
import React,{Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, ScrollView, TextInput,AsyncStorage,ToastAndroid,} from 'react-native';
import {Icon,Header,Button,Left,Right, Content,Picker,} from 'native-base';

import Note from '../components/Note' ;



 class NewListScreen extends Component {
     constructor(props){
         super(props);
         this.state ={
            noteArray: [ ],
            title:'',
            noteText: '',
    
        } 
        this.save= this.save.bind(this);
     }
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
         
            <Icon type ="Entypo" name = "add-to-list" style ={{ fontSize:24, color: tintColor}} />
            
        )
    }
    async save(){
        console.log(this.state)
        try{
            let response = await fetch("http://10.0.3.2:4000/api/save",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    title:this.state.title,
                  
                })
            });
            let res = await response.text();
            console.log(res);
        }catch(error){
            if(error){
                console.log(error);
            }
        }
    }
    // save(){
        // console.log(this.state);
        // alert(this.state)
    // }
     
   render() {
       let notes = this.state.noteArray.map((val,key)=>{
          return <Note key={key} keyval={key} val={val} deleteMethod={()=>this.deleteNote(key)} editMethod={()=>this.editNote(key)}  />
 });
    return(
        <View style={styles.container}>
    <Header style={styles.header}> 
    
      <Left>
            <Button transparent>
              <Icon name='arrow-back' style={{fontSize: 24}} onPress= {()=> this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Text style={styles.headerText}> Make Your Shopping List </Text>
          <Right>
          

           <Button transparent onPress={this.save}>
           
            <Icon type = 'FontAwesome' name='save'/>
             </Button>
          </Right>
      

    </Header>
    <TextInput style={{fontSize: 26, fontStyle: 'italic', color: '#000'}}   placeholder="Enter Title"
          onChangeText={(e) => this.setState({title: e})}
        />
    <ScrollView style={styles.scrollContainer}>
    {notes}
    </ScrollView>
<View style={styles.footer}>
<TouchableOpacity  onPress={this.addNote.bind(this) }   style={styles.addButton}>
<Text styel={styles.addButtonText}>+</Text>
</TouchableOpacity>

         
<TextInput style={styles.textInput}
onChangeText = {(noteText) => this.setState({noteText})} value= {this.state.noteText}
placeholder='Enter Text' placeholderTextColor ='white' underLineColorAndroid ='transparent'>

</TextInput>

</View>
  </View>
       
    );
  }

  addNote(){
 if (this.state.noteText){
     
     this.state.noteArray.push({ 'note': this.state.noteText });
     this.setState({ noteArray: this.state.noteArray})
     this.setState({ noteText: ''})
    }

}
    // saveData = async () => {
    //     try {
    //       await AsyncStorage.setItem('note', JSON.stringify(this.state.noteArray));
    //     } catch (error) {
    //       // Error saving data
    //     }
    //   }
      
// saveData(){

//     AsyncStorage.setItem('notes',JSON.stringify(this.state.noteArray));
//     // let user= 'jhon'
//     // AsyncStorage.setItem('user',user)

//     // alert(list);
// }
// getData = async()=>{
  
//     AsyncStorage.getItem('notes').then(items => {
//       this.setState({notesArray:items})})
//     }
 
  deleteNote(key){
 this.state.noteArray.splice(key, 1)
 this.setState({noteArray: this.state.noteArray})
  }


 }    
 export default NewListScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    header:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EFC22A',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        padding: 26,
      
    },
  
    scrollContainer:{
        flex:1,
        marginBottom:100,
    },
    footer: {
        position: 'absolute',
        alignItems:'center',
        bottom:0,
        left:0,
        right:0,
    },
    addButton: {
        backgroundColor:"#EFC22A",
        width: 90,
        height: 90,
        borderRadius:48,
        borderColor:'#ccc',
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
        marginBottom: -45,
        zIndex: 10,
    },

  addButtonText:{
          fontSize:28,
          color: '#fff',
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      paddingTop: 46,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor: 'green',
}


    
    
   
  });