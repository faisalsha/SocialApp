import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,LayoutAnimation } from 'react-native';
import firebase from '../fb';


 class HomeScreen extends Component{
     state={
         email:"",
         displayName:""
     }

     componentDidMount(){
        const {email,displayName}=firebase.auth().currentUser;

        this.setState({email,displayName});

     }

     signOutUser =() => {
         firebase.auth().signOut();
     };

    render(){
        LayoutAnimation.easeInEaseOut();
        return(
            <View style={styles.container}>
                <Text>Hi{this.state.email}</Text>
                <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  