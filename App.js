import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import Lista from './src/components/Lista';
export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo="meus coleguinhas" />
      <Lista />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
