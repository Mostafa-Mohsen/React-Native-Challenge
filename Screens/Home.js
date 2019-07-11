
import React, {Component} from 'react';
import { Text,ScrollView,Dimensions} from 'react-native';
import {  Container,Content,CardItem,Card,List,ListItem,Button,Icon } from 'native-base';



type Props = {};
const screenHeight = Math.round(Dimensions.get('window').height);
export default class Home extends Component<Props> {
    state = {items:["expedita","nisi","fuga","repellat","placeat"]}
    static navigationOptions = {
        header:null
      };
  render() {
    return (
      <Container style={{ backgroundColor: "#FAFAFA", paddingHorizontal: 24 }}>
        <Content>
          <Text style={{ fontFamily: "Avenir", fontSize: 30, color: "#1D7281", fontWeight: "800", paddingTop: 36 }}>Items</Text>
          <Text style={{ fontFamily: "Avenir", fontSize: 14, color: "#999999", fontWeight: "300", marginBottom: 16 }}>Subtitle goes here</Text>
          <Card style={{ height: (screenHeight*0.67) }}>
            <CardItem>
              <ScrollView nestedScrollEnabled={true}>
                <List>
                  {this.displayItems()}
                </List>
              </ScrollView>
            </CardItem>
          </Card>
          <Button full style={{ marginVertical: 15,backgroundColor:"#00CCFF" }} onPress={() => {
            this.props.navigation.navigate('AddItem', { addNewItem: this.addNewItem.bind(this) });
          }}>
            <Icon name='add-circle-outline' type="MaterialIcons" />
            <Text style={{ fontFamily: "Avenir", fontSize: 20, color: "#FFFFFF" }}>Add new item</Text>
          </Button>
          </Content>
      </Container>
    );
  }
  displayItems(){
      return(
        this.state.items.map((element) => {
            return(
              <ListItem>
                  <Text style={{fontFamily:"Avenir",fontSize:20,color:"#666666",fontWeight:"800"}}>{element}</Text>
              </ListItem>
            )
        })
      )
  }
  addNewItem(item){
      var items = this.state.items;
      items.push(item);
      this.setState({items:items});
  }
}

