import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';


class MessageScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Message Screen</Text>
            </View>
        )
    }
}

export default MessageScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
