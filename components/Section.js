import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Section({ title, children }) {
    return (
        <View style={styles.container}>
            <Text style= {styles.sectionTitle}>{title}</Text>
            {children}
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
        borderColor: "grey",
        borderRadius: 50,
        borderWidth: 2,
    
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
