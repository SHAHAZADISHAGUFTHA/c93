import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import TaskScreen from './screens/TaskScreen';

export default class App extends React.Component {
 render(){ 
    return (
    <View style={styles.container}>
      <AppContainer/>
      
    </View>
  );
}
}
const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen:LoginScreen},
  TaskScreen: {screen:TaskScreen}
})
const AppContainer =  createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9F3FC',
    alignItems: 'center',
    justifyContent: 'center',
  }, formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#fff',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
});
