import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Form';
import CampoTexto from './components/Form/FormText';

function App() {

  const [kins, setKins] = useState([])

  const cadastrarKin = (kin) => {
    setKins([...kins, kin])
    console.log(kins)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarKin={kin => cadastrarKin(kin)}/>
    </div>
  );
}

export default App;
