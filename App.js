import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaVerificacaoPIN from './TelaVerificacaoPIN';
import MenuPrincipal from './TelaPrincipal';
import TelaControle from './TelaControle';
import TelaConfiguracoes from './TelaConfiguracoes'; 
import { ConfiguracaoProvider } from './ContextoConfiguracao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ConfiguracaoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TelaLogin">
          <Stack.Screen name="TelaLogin" component={TelaLogin} />
          <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
          <Stack.Screen name="TelaVerificacaoPIN" component={TelaVerificacaoPIN} />
          <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
          <Stack.Screen name="TelaConfiguracoes" component={TelaConfiguracoes} />
          <Stack.Screen name="TelaControle" component={TelaControle} />
        </Stack.Navigator>
      </NavigationContainer>
    </ConfiguracaoProvider>
  );
}