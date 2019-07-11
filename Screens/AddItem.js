
import React, { Component } from 'react';
import { Text, TextInput, Animated, Image, View } from 'react-native';
import { Container, Content, Button } from 'native-base';



type Props = {};
export default class AddItem extends Component<Props> {
  state = { inputText: "", error: 0, fadeAnim: new Animated.Value(0.74) }
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#FAFAFA", paddingHorizontal: 24 }}>
        <Content>
          <Text style={{ fontFamily: "Avenir", fontSize: 30, color: "#707070", fontWeight: "800", paddingTop: 36, alignSelf: "center" }}>Add new item</Text>
          <Text style={{ fontFamily: "Avenir", fontSize: 14, color: "#999999", fontWeight: "300", marginBottom: 16, alignSelf: "center" }}>Subtitle goes here</Text>

          <TextInput style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 8, marginTop: 168 }}
            placeholder="item name"
            onChangeText={(inputText) => this.setState({ inputText })}
            value={this.state.inputText}
          />
          {this.errorFun()}
          <View style={{ marginBottom: 30 }}>
            <Animated.View
              style={{
                opacity: this.state.fadeAnim,
              }}
            >
              <Image source={require('./Images/shadow.png')} blurRadius={1} style={{ width: "60%", marginTop: 10, alignSelf: "center" }} />
            </Animated.View>
            <Button full style={{ height: 50, borderRadius: 5, backgroundColor: "#1D7281", marginTop: -85 }} onPress={() => {
              this.inputCheck();
            }} onPressIn={() => {
              this.fadeOut();
            }} onPressOut={() => {
              this.fadeIn();
            }}>
              <Text style={{ fontFamily: "Avenir", fontSize: 20, color: "#FFFFFF", fontWeight: "800" }}>Add</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
  inputCheck() {
    let reg = /\d/;
    if (reg.test(this.state.inputText)) {
      this.setState({ error: 1 });
    } else if (this.state.inputText.trim().length == 0) {
      this.setState({ error: 2 });
    } else {
      this.props.navigation.state.params.addNewItem(this.state.inputText);
      this.props.navigation.goBack();
    }
  }
  errorFun() {
    if (this.state.error == 1) {
      return (
        <Text style={{ fontFamily: "Avenir", fontSize: 16, color: "#FF0000" }}>Numbers not allowed</Text>
      )
    } else if (this.state.error == 2) {
      return (
        <Text style={{ fontFamily: "Avenir", fontSize: 16, color: "#FF0000" }}>Empty Input</Text>
      )
    }
  }
  fadeIn() {
    this.setState({ fadeAnim: new Animated.Value(0) },
      () => {
        Animated.timing(          
          this.state.fadeAnim, 
          {
            toValue: 0.74,           
            duration: 100,       
          }
        ).start();
      })
  }
  fadeOut() {
    this.setState({ fadeAnim: new Animated.Value(0.74) },
      () => {
        Animated.timing(         
          this.state.fadeAnim, 
          {
            toValue: 0,           
            duration: 100,       
          }
        ).start();
      })
  }
}

