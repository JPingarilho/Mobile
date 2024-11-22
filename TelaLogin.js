import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaLogin = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (login && senha) {
      navigation.navigate('TelaVerificacaoPIN'); 
    } else {
      alert('Por favor, insira login e senha');
    }
  };

  const handleCadastro = () => {
    navigation.navigate('TelaCadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text style={styles.link} onPress={handleCadastro}>Não tem uma conta? Cadastre-se</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  link: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default TelaLogin;