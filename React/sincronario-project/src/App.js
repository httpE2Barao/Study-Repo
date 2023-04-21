import { useState } from 'react';
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

  const cadastrarKin = (kin) => {
    setKins([...kins, kin])
    console.log(kins)
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
          corSecundaria={cla.corSecundaria}/>
      )}

    </div>
  );
}

export default App;
