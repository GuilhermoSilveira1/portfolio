import React from 'react';
import OBR from './components/projects/2019/OBR';

function App() {

  const lines = [
    'Inicializando o portfólio de Guilhermo...',
    'Carregando projetos...',

  ];

  const lines2019 = [
    'Avançando para 2019',
    'Projeto 1: Olimpíada Brasileira de Robótica',
    'Projeto 2: Grand Prix de Inovação Senai',
  ]

  const lines2022 = [
    'Avançando o tempo para 2022',
    'Jornada de Aprendizagem 1: Mesa Giratória',
    'Jornada de Aprendizagem 2: Automatização Máquina de Suco',

  ]

  const lines2023 = [
    'Avançando para 2023',
    'Jornada de Aprendizagem 3: Braço Colaborativo',
    'Jornada de Aprendizagem 4: Mesa Giratória',

  ]

  const lines2024 = [
    'Avançando para 2024',
    'Jornada de Aprendizagem 5: Protótipo Site de Recrutamento e Seleção',
    'Projeto 1: Change Audiobook',
    'Projeto 2: Training page using CSS',

  ]
  //A constante lines possui todas as linhas que serão mostradas no "terminal". 
  //Dividi os projetos por ano, assim fica mais fácil de gerar as frases e os projetos.

  return (
    <div className="App">
      <OBR />
    </div>
  );
}

export default App;
