import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native';


const ProfileScreen = () => {
    return (
        <View style = {styles.container}>
            <Text>This is the ProfileScreen Page</Text>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightred',
        }
    }
);