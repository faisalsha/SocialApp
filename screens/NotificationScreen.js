import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';


class NotificationScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Notification Screen</Text>
            </View>
        )
    }
}

export default NotificationScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
