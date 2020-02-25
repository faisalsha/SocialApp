import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image,StatusBar} from 'react-native';
import firebase from '../fb';
// import {ionicons} from '@expo-icons';

 class RegisterScreen extends Component{
    static navigationOptions={
        header:null
     }
     state={
         name:"",
         email:"",
         Password:"",
         errorMessage:null
     };
     handleSignup=() => {
         firebase.auth()
         .createUserWithEmailAndPassword(this.state.email,this.state.Password)
         .then(userCredentials => {
             return userCredentials.user.updateProfile({
                 displayName:this.state.name
             })
             .catch(error => this.setState( {errorMessage:error.message} ));
         });
        
     };


    render(){
        return(
            <View style={styles.container}>
            <StatusBar barStyle="dark-content"></StatusBar>
            <Image  source={require('../assets/one.jpg')} style={{height:160,width:400,marginTop:14,marginLeft:1}}>
                </Image>
                
                <Text style={styles.greeting}>
                    {'Hello \nSignup To Get Started.'}
                </Text>

                
            <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>
                }

            </View>
            <View style={styles.form}>
            <View style={{marginTop:32}}>
                    <Text style={styles.inputTitle}>Full Name</Text>
                    <TextInput style={styles.input} autoCapitalize="none" 
                    onChangeText={name =>this.setState({name})}
                    value={this.state.name} >

                    </TextInput>
                </View>
                <View style={{marginTop:32}}>
                    <Text style={styles.inputTitle}>Email Address:</Text>
                    <TextInput style={styles.input} autoCapitalize="none" 
                    onChangeText={email =>this.setState({email})}
                    value={this.state.email} >

                    </TextInput>
                </View>

                <View style={{marginTop:32}}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input} autoCapitalize="none"
                    secureTextEntry
                    onChangeText={Password =>this.setState({Password})}
                    value={this.state.Password} >

                    </TextInput>
                </View>
                

            </View>
            <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
            <Text style={{color:"#fff",fontWeight:"500"}}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}
            onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={{color:'purple',fontSize:13}}>
                
                New To Social App? <Text style={{fontWeight:"500",color:"red"}}>Login</Text>
                
                </Text>

            </TouchableOpacity>
            </View>

        )
    }
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop:10
  
    },
    greeting:{
        margin:12,
        fontSize:20,
        textAlign:"center",

        
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30
    },
    form:{
        marginBottom:48,
        marginHorizontal:38
    },
    inputTitle:{
        color:"#8ABF9E",
        fontSize:10,
        textTransform:"uppercase"
    },
    input:{
        borderBottomColor:"#8ABF9E",
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"
    },
    button:{
        marginHorizontal:30,
        backgroundColor:"#E9446A",
        borderRadius:4,
        height:52,
        alignItems:"center",
        justifyContent:"center"
    },
    error:{
        color:'red',
        fontSize:13,
        fontWeight:'600',
        textAlign:'center'
    }
  });
  