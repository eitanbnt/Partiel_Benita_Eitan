import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import ListeJeux from './components/ListeJeux';
import Section from './components/Section';

export default function App() {
  const Game = [
    {
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
    }
  ];

  return (
    <View style={styles.container}>
      <Section title="Jeux vidéo">
        <ListeJeux games={Game}/>
      </Section>
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
