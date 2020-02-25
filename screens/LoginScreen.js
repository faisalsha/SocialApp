import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image,StatusBar,LayoutAnimation} from 'react-native';
import firebase from '../fb';

 class LoginScreen extends Component{
     static navigationOptions={
        header:null
     }

     state={
         email:"",
         Password:"",
         errorMessage:null
     };

     handleLogin=() => {
         const {email,Password}=this.state;

         firebase.auth().signInWithEmailAndPassword(email,Password).catch(error => this.setState({errorMessage:error.message}));
     }
    render(){
        LayoutAnimation.easeInEaseOut();
        return(
          
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"></StatusBar>
                <Image  source={require('../assets/one.jpg')} style={{height:260,width:400,marginTop:4,marginLeft:1}}>
                </Image>
               
                {/* <Image  source={require('../assets/two.jpg')} style={{position:"absolute",bottom:-240,right:0}}>
                </Image> */}
               
                <Text style={styles.greeting}>
                    {'Hello again.\nWelcome back.'}
                    {/* <Image  source={require('../assets/four.png')} style={{width:72,height:40,marginBottom:-33,alignSelf:"center"}} >
                </Image> */}
                </Text>

                
            <View style={styles.errorMessage}>
                {
                    this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>
                }

            </View>
            <View style={styles.form}>
                <View>
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
            <TouchableOpacity style={styles.button} onPress={this.handleLogin} >
            <Text style={{color:"#fff",fontWeight:"500"}}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                <Text style={{color:'purple',fontSize:13}}
                onPress={() => this.props.navigation.navigate("Register")}>
                New To Social App? <Text style={{fontWeight:"500",color:"red"}}>Sign up</Text>
                </Text>
            </TouchableOpacity>
            </View>

        )
    }
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        paddingTop:20,
      flex: 1,
      backgroundColor: '#fff',
  
    },
    greeting:{
        margin:-32,
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
  