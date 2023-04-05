import React from 'react';
import Formulario from '../components/form';
import Lista from '../components/list';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
