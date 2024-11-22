import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useConfiguracao } from './ContextoConfiguracao';
import { Picker } from '@react-native-picker/picker'; // Importando o picker correto

const TelaConfiguracoes = () => {
  const {
    corFundo,
    setCorFundo,
    corFonte,
    setCorFonte,
    tamanhoFonte,
    setTamanhoFonte,
  } = useConfiguracao();

  return (
    <View style={{ flex: 1, backgroundColor: corFundo, padding: 20 }}>
      
      {/* Título geral */}
      <Text style={{ fontSize: tamanhoFonte, color: corFonte, marginBottom: 20 }}>
        Selecione as configurações
      </Text>

      {/* Seção Plano de Fundo */}
      <Text style={{ fontSize: tamanhoFonte, color: corFonte }}>Plano de fundo:</Text>
      <Picker
        selectedValue={corFundo}
        onValueChange={(itemValue) => setCorFundo(itemValue)}
      >
        <Picker.Item label="Branco" value="#ffffff" />
        <Picker.Item label="Preto" value="#000000" />
        <Picker.Item label="Azul Claro" value="#ADD8E6" />
        <Picker.Item label="Verde Claro" value="#90EE90" />
        <Picker.Item label="Cinza" value="#808080" />
        <Picker.Item label="Amarelo" value="#FFFF00" />
        <Picker.Item label="Laranja" value="#FFA500" />
        <Picker.Item label="Rosa" value="#FFC0CB" />
        <Picker.Item label="Vermelho" value="#FF0000" />
        <Picker.Item label="Bege" value="#F5F5DC" />
      </Picker>

      {/* Seção Cor da Fonte */}
      <Text style={{ fontSize: tamanhoFonte, color: corFonte }}>Cor da fonte:</Text>
      <Picker
        selectedValue={corFonte}
        onValueChange={(itemValue) => setCorFonte(itemValue)}
      >
        <Picker.Item label="Preto" value="#000000" />
        <Picker.Item label="Branco" value="#ffffff" />
        <Picker.Item label="Cinza Escuro" value="#2F4F4F" />
        <Picker.Item label="Verde Escuro" value="#006400" />
        <Picker.Item label="Azul Escuro" value="#00008B" />
        <Picker.Item label="Amarelo Escuro" value="#B8860B" />
        <Picker.Item label="Roxo" value="#800080" />
        <Picker.Item label="Laranja Escuro" value="#FF8C00" />
        <Picker.Item label="Ciano" value="#00FFFF" />
        <Picker.Item label="Bege Escuro" value="#F4A300" />
      </Picker>

      {/* Seção Tamanho da Fonte */}
      <Text style={{ fontSize: tamanhoFonte, color: corFonte }}>Tamanho da fonte:</Text>
      <TextInput
        value={String(tamanhoFonte)}
        onChangeText={(text) => setTamanhoFonte(Number(text))}
        keyboardType="numeric"
        placeholder="Tamanho da Fonte"
        style={{
          height: 40,
          borderColor: corFonte,
          borderWidth: 1,
          paddingHorizontal: 10,
          color: corFonte,
          fontSize: tamanhoFonte,
          marginBottom: 20,
        }}
      />
    </View>
  );
};

export default TelaConfiguracoes;
