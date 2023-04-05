import React from 'react';
import Formulario from '../components/form';
import Lista from '../components/list';
import style from './App.module.scss';
import Cronometro from '../components/stopwatch';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
