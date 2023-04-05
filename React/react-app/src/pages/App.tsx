import style from './App.module.scss';
import Formulario from '../components/form';
import Lista from '../components/list';
import Cronometro from '../components/stopwatch';
import { useState } from 'react';
import { Itarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
