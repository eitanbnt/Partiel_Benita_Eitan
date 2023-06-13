import React from 'react';
import { View, Text } from 'react-native';

const GameItem = ({ title, price, category }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemPrice}>{price}</Text>
            <Text style={styles.itemCategory}>{category}</Text>
        </View>
    );
};

export default GameItem;
const styles = {
    itemContainer: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 20,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    itemPrice: {
        fontSize: 14,
        color: '#888888',
        marginBottom: 5,
    },
    itemCategory: {
        fontSize: 14,
        color: '#555555',
    }
};