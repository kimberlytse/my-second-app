import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native';


const DetailsScreen = () => {
    return (
        <View style = {styles.container}>
            <Text>This is the Details Page</Text>
        </View>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'lightyellow',
        }
    }
);