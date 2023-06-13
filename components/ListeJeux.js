import React from 'react';
import { FlatList } from 'react-native';
import GameItem from './Jeux';

const GameList = ({ games }) => {
    const renderItem = ({ item }) => {
        return (
            <GameItem style={styles.listItemText}
                title={item.name}
                price={item.price}
                category={item.catégorie}
            />
        );
    };

    return (
        <FlatList style={styles.listItemContainer}
            data={games}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default GameList;
const styles = {
    listItemContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        marginBottom:15,
    },
    listItemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
};