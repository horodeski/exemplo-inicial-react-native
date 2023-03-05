import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
export default function App() {
  const tasks = [
    {nome:"Geovana", apelido:"ana paula"},
    {nome:"Isadora", apelido:"caloura"},
    {nome:"Maria", apelido:"army bafuda"},
    {nome:"Marcelo", apelido:"poste"},
    {nome:"Gregorio", apelido:"cavalo, café, freg, vladimir, valmir, baiano, grêmio, careca, taylor swift, amigo"},
  ];
  return (
    <View style={styles.container}>
      <Header titulo="meus coleguinhas" />
      <View >
        <FlatList data={tasks} renderItem={({ item }) => 
        <View style={styles.infobox}>
          <Text>{item.nome} ({item.apelido})</Text>
        </View>} 
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  infobox: {
    alignItems: 'center',
    flex: 1
  }
});
