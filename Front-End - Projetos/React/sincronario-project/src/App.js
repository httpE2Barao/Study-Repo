import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Form';
import Clas from './components/Clas';

function App() {

  const clas = [
    {
      nome: 'Fogo',
      corPrimaria: '#FFD02C',
      corSecundaria: '#fff0a2'
    },{
      nome: 'Sangue',
      corPrimaria: '#FF4C40',
      corSecundaria: '#ffaca6'
    },{
      nome: 'Verdade',
      corPrimaria: '#c6c6c6',
      corSecundaria: '#FFFFFF'
    },{
      nome: 'Céu',
      corPrimaria: '#4741FF',
      corSecundaria: '#b4b1ff'
    }
  ]

  const [kins, setKins] = useState([])

  // Array de kins padrão
  useEffect(() => {
    setKins([
      {
        kin: 'Sol Amarelo',
        caracteristicas: 'Vida, Fogo Universal, Iluminar',
        imagem: './imagens/Kins/20 Sol-amarelo.png',
        cla: 'Fogo'
      },{
        kin: 'Dragão Vermelho',
        caracteristicas: 'Ser, Nascimento, Nutrir',
        imagem: './imagens/Kins/1 Dragao-vermelho.png',
        cla: 'Fogo'
      },{
        kin: 'Vento Branco',
        caracteristicas: 'Alento, Espírito, Comunicar',
        imagem: './imagens/Kins/2 Vento-branco.png',
        cla: 'Fogo'
      },{
        kin: 'Noite Azul',
        caracteristicas: 'Intuição, Abundância, Sonhar',
        imagem: './imagens/Kins/3 Noite-azul.png',
        cla: 'Fogo'
      },{
        kin: 'Semente Amarela',
        caracteristicas: 'Percepção, Florescimento, Focalizar',
        imagem: './imagens/Kins/4 Semente-amarela.png',
        cla: 'Fogo'
      },{
        kin: 'Serpente Vermelha',
        caracteristicas: 'Instinto, Força-vital, Sobreviver',
        imagem: './imagens/Kins/5 Serpente-vermelha.png',
        cla: 'Sangue'
      },{
        kin: 'Enlaçador de Mundos Branco',
        caracteristicas: 'Oportunidade, Morte, Igualar',
        imagem: './imagens/Kins/6 Enlaçador-de-mundos-branco.png',
        cla: 'Sangue'
      },{
        kin: 'Mão Azul',
        caracteristicas: 'Cura, Realização, Conhecer',
        imagem: './imagens/Kins/7 Mão-azul.png',
        cla: 'Sangue'
      },{
        kin: 'Estrela Amarela',
        caracteristicas: 'Arte, Elegância, Embelezar',
        imagem: './imagens/Kins/8 Estrela-amarela.png',
        cla: 'Sangue'
      },{
        kin: 'Lua Vermelha',
        caracteristicas: 'Fluxo, Água Universal, Purificar',
        imagem: './imagens/Kins/9 Lua-vermelha.png',
        cla: 'Sangue'
      },{
        kin: 'Cachorro Branco',
        caracteristicas: 'Lealdade, Coração, Amar',
        imagem: './imagens/Kins/10 Cachorro-branco.png',
        cla: 'Verdade'
      },{
        kin: 'Macaco Azul',
        caracteristicas: 'Ilusão, Magia, Brincar',
        imagem: './imagens/Kins/11 Macaco-azul.png',
        cla: 'Verdade'
      },{
        kin: 'Humano Amarelo',
        caracteristicas: 'Sabedoria, Livre-Arbítrio, Influenciar',
        imagem: './imagens/Kins/12 Humano-amarelo.png',
        cla: 'Verdade'
      },{
        kin: 'Caminhante do Céu Vermelho',
        caracteristicas: 'Vigilância, Espaço, Explorar',
        imagem: './imagens/Kins/13 Caminhante-do-ceu-vermelho.png',
        cla: 'Verdade'
      },{
        kin: 'Mago Branco',
        caracteristicas: 'Receptividade, Atemporalidade, Encantar',
        imagem: './imagens/Kins/14 Mago-branco.png',
        cla: 'Verdade'
      },{
        kin: 'Águia Azul',
        caracteristicas: 'Mente, Visão, Criar',
        imagem: './imagens/Kins/15 Aguia-azul.png',
        cla: 'Céu'
      },{
        kin: 'Guerreiro Amarelo',
        caracteristicas: 'Intrepidez, Inteligência, Questionar',
        imagem: './imagens/Kins/16 Guerreiro-amarelo.png',
        cla: 'Céu'
      },{
        kin: 'Terra Vermelha',
        caracteristicas: 'Sincronicidade, Navegação, Evoluir',
        imagem: './imagens/Kins/17 Terra-vermelha.png',
        cla: 'Céu'
      },{
        kin: 'Espelho Branco',
        caracteristicas: 'Ordem, Infinito, Refletir',
        imagem: './imagens/Kins/18 Espelho-branco.png',
        cla: 'Céu'
      },{
        kin: 'Tormenta Azul',
        caracteristicas: 'Energia, Autogeração, Catalizar',
        imagem: './imagens/Kins/19 Tormenta-azul.png',
        cla: 'Céu'
      },
    ]);
  }, []);

  const cadastrarKin = (kin) => {
    setKins([...kins, kin])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        clas={clas.map(cla => cla.nome)}
        aoCadastrarKin={kin => cadastrarKin(kin)}
      />

      {clas.map(cla => 
        <Clas 
          key={cla.nome} 
          nome={cla.nome} 
          corPrimaria={cla.corPrimaria} 
          corSecundaria={cla.corSecundaria}
          kins={kins.filter(kin => kin.cla == cla.nome)}
        />
      )}

    </div>
  );
}

export default App;
