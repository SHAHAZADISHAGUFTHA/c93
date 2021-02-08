import React,{Component}from 'react';
import {View,Text,TextInput,Modal,StyleSheet,TouchableOpacity,Image,KeyboardAvoidingView,Alert,ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends Component{
  constructor(){
      super();
      this.state={
          Name:'',
          emailId:'',
          password:'',
          confirmPassword:'', 
          isModalVisible:'false'
      }
  }


  userSignUp=(emailId,password,confirmPassword)=>{
    if (password !== confirmPassword){
         return Alert.alert("password doesn't match\nCheck your password")
    }else{
      firebase.auth.alert().createUserWithEmailAndPassword(emailId, password)
    .then(()=>{
      db.collection('users').add({
        Name:this.state.Name,
        email_Id:this.state.emailId
      })
      return Alert.alert('User Added Sucessfully');
    }) 
    .catch ((error)=> {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
    }
  }


  userLogin = (emailId,password)=> {
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=> {
      this.props.navigation.navigate('TaskScreen')
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }
    
showModal = ()=>{
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}
        >
             <View style={styles.modalContainer}>
      <ScrollView style={{width:'100%'}}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Text
          style={styles.modalTitle}
          >Registration</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Name"}
          maxLength ={10}
          onChangeText={(text)=>{
            this.setState({
              Name: text
            })
          }}
        />
         <TextInput
          style={styles.formTextInput}
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />
     <TextInput
          style={styles.formTextInput}
          placeholder ={"Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        /><TextInput
          style={styles.formTextInput}
          placeholder ={"Confrim Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        />
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
            }
          >
          <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={()=>this.setState({"isModalVisible":false})}
          >
          <Text style={{color:'#ff5722'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  </Modal>

      
    )
}
render(){
    return( 
        <View  style={styles.container}>
          {this.showModal()}
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
          <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TouchableOpacity
           style={[styles.button,{marginBottom:20, marginTop:20,color:'#30fcf0'}]}
           onPress = {()=>{
             this.userLogin(this.state.emailId, this.state.password)
           }}
           >
           <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={[styles.button,,{color:'#30fcf0'}]}
           onPress={()=>this.setState({ isModalVisible:true})}
           >
           <Text style={styles.buttonText}>SignUp</Text>
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
       width:200,
       height:50,
       backgroundColor:'#30fcf0',
       alignItems:'center',
       justifyContent:'center',
       borderWidth:1
   },
     loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#6c8a9f',
     fontSize: 20,
     margin:10,
     paddingLeft:10
  },
    modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#6c8a9f',
   margin:50
 },
  modalContainer:{
  flex:1,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:"#ffffff",
  marginRight:30,
  marginLeft : 30,
  marginTop:80,
  marginBottom:80,
},
   registerButton:{
    width:200,
    height:40,
    backgroundColor:'#30fcf0',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    marginTop:30
  },
  registerButtonText:{
    color:'#6c8a9f',
    fontSize:15,
    fontWeight:'bold'
  },
  cancelButton:{
    width:200,
    height:30,
    backgroundColor:'#30fcf0',
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#6c8a9f',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  }
})
