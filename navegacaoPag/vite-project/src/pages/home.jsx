import React from 'react';
import { useNavigate } from 'react-router-dom';
function home() {
  // Obtém a função de navegação usando o hook useNavigate
  const irPara= useNavigate();
  // Define a função handleClick que será chamada ao clicar no botão
  const handleClick = () => {
    // Navegar para a página Sobre ao clicar em algum botão
    irPara('/sobre');
    irPara('/materias');

  };
  // Retorna a estrutura JSX da página inicial
  return (
    <div>
      {/* Título da página inicial */}
      <h1>Página Inicial</h1>      
      {/* Botão para navegar para a página About ao ser clicado */}
      <button onClick={handleClick}>Ir para Sobre</button> &nbsp;
      <button onClick={handleClick}>Ver Materias</button>

    </div>
  );
}
// Exporta o componente Home como padrão
export default home;

