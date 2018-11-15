import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, Left, Right, Icon, Button, Body, Title, Card, CardItem, } from 'native-base';


class ListScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
    <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
)}

render() {
  return (
    <View style={styles.container}>
       <Header style={styles.header}>
          <Left>
          <Button transparent>
          <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
       </Header>
       
    <Card>
      <CardItem>
          <Left>
          <Body>
          <Text>Dawood Super market</Text>
          <Text note>Latifabad</Text>
          </Body>
          </Left>
      </CardItem>
          {/* <CardItem cardBody>
              <Image source = {require('../images/dawood.jpeg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>   */}
    </Card>
    </View>
)};
}

export default ListScreen;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
},
header: {
    backgroundColor: 'orange',
}
});
