import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';


class  PostScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Post Screen</Text>
            </View>
        )
    }
}

export default PostScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
