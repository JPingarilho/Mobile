import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const TelaCadastro = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const verificarUsuarioExistente = async (nomeUsuario) => {
    try {
      const usuarios = await AsyncStorage.getItem('usuarios');
      if (usuarios) {
        const listaUsuarios = JSON.parse(usuarios);
        return listaUsuarios.some((usuario) => usuario.nome === nomeUsuario);
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const realizarCadastro = async () => {
    if (!nome || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const usuarioExistente = await verificarUsuarioExistente(nome);
    if (usuarioExistente) {
      Alert.alert('Erro', 'Nome de usuário já cadastrado.');
      return;
    }

    try {
      const novoUsuario = { nome, senha };
      const usuarios = await AsyncStorage.getItem('usuarios');
      const listaUsuarios = usuarios ? JSON.parse(usuarios) : [];
      listaUsuarios.push(novoUsuario);

      await AsyncStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
      Alert.alert('Cadastro realizado', 'Usuário cadastrado com sucesso!');
      navigation.navigate('TelaLogin');
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro durante o cadastro. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={realizarCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: '80%',
  },
});

export default TelaCadastro;
