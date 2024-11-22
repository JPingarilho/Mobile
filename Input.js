import React, { useContext } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { ConfiguracaoContext } from './ContextoConfiguracao';

const Input = ({ placeholder, secureTextEntry, onChangeText, keyboardType }) => {
  const { corTema, corFonte, tamanhoFonte } = useContext(ConfiguracaoContext);

  return (
    <TextInput
      style={[styles.input, { backgroundColor: corTema, color: corFonte, fontSize: tamanhoFonte }]}
      placeholder={placeholder}
      placeholderTextColor={corFonte}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default Input;
