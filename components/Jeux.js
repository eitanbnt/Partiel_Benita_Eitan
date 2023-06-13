import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Jeux({name, price, cat}) {
    console.log(name);
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{price}</Text>
            <Text>{cat}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});