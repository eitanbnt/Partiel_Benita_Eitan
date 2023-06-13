import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddGameForm = ({ onAddGame }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [catégorie, setCategory] = useState('');

    const handleAddGame = () => {
        const newGame = {
            name,
            price,
            catégorie,
            id: '000', // Générer un identifiant unique pour le jeu
        };

        onAddGame(newGame);

        setName('');
        setPrice('');
        setCategory('');
    };

    return (
        <View style={styles.sectionContainer}>
            <TextInput
                placeholder="Nom du jeu"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Prix"
                value={price}
                onChangeText={setPrice}
            />
            <TextInput
                placeholder="Catégorie"
                value={catégorie}
                onChangeText={setCategory}
            />
            <Button title="Ajouter" onPress={handleAddGame} />
        </View>
    );
};

export default AddGameForm;
const styles = {
    sectionContainer: {
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 150,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
};