import React,{Component} from 'react';
import {View,Text,StyleSheet,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
export default class LoginScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
        <Header
         backgroundColor={'#9c8210'}
         centerComponent={{
         text:'𝕋𝕠 𝔻𝕠 𝕃𝕚𝕤𝕥',
         style: { color: '#fff', fontSize: 20 },
         }}
        />
        
        <TouchableOpacity 
         style={styles.Button}>
        <Text>input your task  </Text>
        </TouchableOpacity>
            </View>
        )
        
    }
}






const styles = StyleSheet.create({

    container:{
     flex:1,
     backgroundColor:'#A9F3FC',
     alignItems: 'center',
     justifyContent: 'center'
   },
   Button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#547FE4",
   }
})