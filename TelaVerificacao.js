import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ConfiguracaoContext } from './ContextoConfiguracao'; 

const TelaVerificacao = () => {
  const { corTema, corFonte, tamanhoFonte } = useContext(ConfiguracaoContext);
  const navigation = useNavigation();

  const [pin, setPin] = useState('');
  const [pinCorreto, setPinCorreto] = useState('');
  const [tempoRestante, setTempoRestante] = useState(20); 


  const gerarPinAleatorio = () => {
    const pinGerado = Math.floor(1000 + Math.random() * 9000).toString();
    setPinCorreto(pinGerado);
  };

  
  const verificarPin = () => {
    if (pin === pinCorreto) {
      alert('PIN correto! Bem-vindo!');
      
      navigation.navigate('TelaConfiguracoes');
    } else {
      alert('PIN incorreto! Tente novamente.');
      setPin(''); 
      gerarPinAleatorio(); 
      setTempoRestante(20); 
    }
  };

  useEffect(() => {
    gerarPinAleatorio(); 

    if (tempoRestante > 0) {
      const timer = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); 
    } else {
      alert('Tempo expirado! Por favor, tente novamente.');
      gerarPinAleatorio(); 
      setTempoRestante(20); 
    }
  }, [tempoRestante]);

  return (
    <View style={[styles.container, { backgroundColor: corTema }]}>
      <Text style={[styles.titulo, { fontSize: tamanhoFonte, color: corFonte }]}>VERIFICAÇÃO</Text>
      <Text style={[styles.instrucao, { color: corFonte }]}>
        Insira o PIN de 4 dígitos para continuar.
      </Text>
      <Text style={[styles.pinGerado, { color: corFonte }]}>
        PIN gerado: {pinCorreto}
      </Text>
      <TextInput
        style={[styles.input, { color: corFonte, backgroundColor: corTema, fontSize: tamanhoFonte }]}
        keyboardType="numeric"
        value={pin}
        onChangeText={setPin}
        maxLength={4}
        placeholder="Digite o PIN"
        placeholderTextColor={corFonte}
      />
      <Text style={[styles.contador, { color: corFonte }]}>Tempo restante: {tempoRestante}s</Text>
      <Button title="Verificar PIN" onPress={verificarPin} />
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
  instrucao: {
    fontSize: 18,
    marginBottom: 10,
  },
  pinGerado: {
    fontSize: 18,
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
  contador: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default TelaVerificacao;
