import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

export default class Lista extends Component {
    render () {
        const tasks = [
            {nome:"Geovana", apelido:"ana paula"},
            {nome:"Isadora", apelido:"caloura"},
            {nome:"Maria", apelido:"army bafuda"},
            {nome:"Marcelo", apelido:"poste"},
            {nome:"Gregorio", apelido:"cavalo, café, freg, vladimir, valmir, baiano, grêmio, careca, taylor swift, amigo"},
          ];
        return (
            <View >
                <FlatList data={tasks} renderItem={({ item }) => 
                    <View style={styles.infobox}>
                        <Text>{item.nome} ({item.apelido})</Text>
                    </View>} 
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
  infobox: {
    alignItems: 'center',
    flex: 1
  }
});