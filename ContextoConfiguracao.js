import React, { createContext, useState, useContext } from 'react';

const ConfiguracaoContext = createContext();

export const ConfiguracaoProvider = ({ children }) => {
  const [corFundo, setCorFundo] = useState('#ffffff');
  const [corFonte, setCorFonte] = useState('#000000');
  const [tamanhoFonte, setTamanhoFonte] = useState(20);
  const [estiloFonte, setEstiloFonte] = useState('Arial');

  return (
    <ConfiguracaoContext.Provider
      value={{
        corFundo,
        setCorFundo,
        corFonte,
        setCorFonte,
        tamanhoFonte,
        setTamanhoFonte,
        estiloFonte,
        setEstiloFonte,
      }}
    >
      {children}
    </ConfiguracaoContext.Provider>
  );
};

export const useConfiguracao = () => {
  return useContext(ConfiguracaoContext);
};
