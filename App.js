/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import  {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Screens/Home'
import AddItem from './Screens/AddItem'


type Props = {};
class App extends Component<Props> {
  render() {
    
  }
}
const AppNavigator = createStackNavigator({
  Home: Home,
  AddItem: AddItem
});

export default createAppContainer(AppNavigator);
