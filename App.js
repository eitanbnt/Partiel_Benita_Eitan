import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameList from './components/ListeJeux';
import GameListSection from './components/Section';
import AddGameForm from './components/AjouterJeux';
import { useState } from 'react';

export default function App() {

  const [games, setGames] = useState([{
      name: "Medal of Honor",
      price: "10€",
      catégorie: "FPS",
      id: 23124
    },
    {
      name: "Street Fighter 2",
      price: "20€",
      catégorie: "Combat",
      id: 12349
    },
    {
      name: "Call of Duty",
      price: "30€",
      catégorie: "FPS",
      id: 549762
    },
    {
      name: "NBA2K5",
      price: "5€",
      catégorie: "Sport",
      id: 549763
    },
    {
      name: "God Of War 2018",
      price: "25€",
      catégorie: "Action-Aventure",
      id: 549764
    },
    {
      name: "The Legend of Zelda : The Wind Walker",
      price: "35€",
      catégorie: "Action-Aventure",
      id: 549765
    },
    {
      name: "Horizon : Forbidden West",
      price: "40€",
      catégorie: "Action-Aventure",
      id: 549766
    },
    {
      name: "Forza Horizon 5",
      price: "45€",
      catégorie: "Voiture",
      id: 549767
    },
    {
      name: "The Last Of Us",
      price: "55€",
      catégorie: "Survival horror",
      id: 549768
    },
    {
      name: "Red Dead Redemption II",
      price: "18€",
      catégorie: "Action-Aventure",
      id: 549769
    }]);
  const handleAddGame = (newGame) => {
    setGames([...games, newGame]);
    console.log(newGame);
  };

  return (
    <View style={styles.container}>
      <GameListSection title="Jeux vidéo" style={styles.container}>
        <GameList games={games} />
      </GameListSection>
      <Text>Ajouter un nouveau jeu :</Text>
      <AddGameForm onAddGame={handleAddGame} />
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
    paddingHorizontal: 20,
  },
});
