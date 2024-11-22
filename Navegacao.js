import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaVerificacao from './TelaVerificacao';
import TelaConfiguracoes from './TelaConfiguracoes';
import TelaControle from './TelaControle';

const Stack = createStackNavigator();

const Navegacao = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={TelaCadastro} />
        <Stack.Screen name="Verificação" component={TelaVerificacao} />
        <Stack.Screen name="Configurações" component={TelaConfiguracoes} />
        <Stack.Screen name="Controle" component={TelaControle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navegacao;