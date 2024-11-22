import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Botao = ({ titulo, onPress, corFundo }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.botao, { backgroundColor: corFundo }]}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Botao;
