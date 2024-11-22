import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuPrincipal = () => {
  const navigation = useNavigation();

  const handleIrParaConfig = () => {
    navigation.navigate('TelaConfiguracoes');
  };

  const handleIntegracaoPython = () => {
    navigation.navigate('TelaControle');
  };

  return (
    <View style={styles.container}>
      
      <Button title="INTEGRAÇÃO COM PYTHON" onPress={handleIntegracaoPython} />

      <Button title="IR PARA CONFIGURAÇÕES" onPress={handleIrParaConfig} />
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
  integracaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MenuPrincipal;
