import React from 'react';
import { View, Text } from 'react-native';

const GameListSection = ({ title, children }) => {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );
};
export default GameListSection;

const styles = {
    sectionContainer: {
        marginTop: 200,
        alignItems: "center",
        justifyContent: "center",
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
};

