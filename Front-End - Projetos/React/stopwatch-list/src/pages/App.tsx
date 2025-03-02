import style from './App.module.scss';
import Formulario from '../components/form';
import Lista from '../components/list';
import Cronometro from '../components/stopwatch';
import { useState } from 'react';
import { Itarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if ( selecionado ) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefas => {
        if ( tarefas.id === selecionado.id ) {
          return {
            ...tarefas,
            selecionado: false,
            completo: true
          }
        }
        return tarefas;
      }
    ))}
  }
  
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa} 
        />
    </div>
  );
}

export default App;
