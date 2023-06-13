import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Jeux from './Jeux';

export default function ListeJeux(games) {
    const renderItem = ({ item }) => {
        return <Jeux name={item.name} price={item.price} cat={item.cat} />;
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={games}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
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
