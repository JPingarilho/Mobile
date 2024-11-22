import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const TelaControle = () => {
  const API_URL = 'http://<ENDEREÇO_IP_ESP8266>';

  const sendCommand = async (command) => {
    try {
      await fetch(`${API_URL}/control`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command }),
      });
    } catch (error) {
      console.error('Erro ao enviar comando:', error);
      Alert.alert('Erro', 'Não foi possível enviar o comando.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Motores</Text>

      <View style={styles.row}>
        <Button title="↑ Frente" onPress={() => sendCommand('forward')} />
      </View>

      <View style={styles.row}>
        <Button title="← Esquerda" onPress={() => sendCommand('left')} />
        <Button
          title="⏹️ Parar"
          color="#ff6666"
          onPress={() => sendCommand('stop')}
        />
        <Button title="→ Direita" onPress={() => sendCommand('right')} />
      </View>

      <View style={styles.row}>
        <Button title="↓ Trás" onPress={() => sendCommand('backward')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default TelaControle;