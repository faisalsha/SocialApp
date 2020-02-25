import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';


class Profilescreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>
        )
    }
}

export default Profilescreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
