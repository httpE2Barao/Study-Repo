import style from './list.module.scss';
import Item from "./item";
import { Itarefa } from '../../types/tarefa';

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada:Itarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        // tarefa={item.tarefa}
                        // tempo={item.tempo} ou ->
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
} 

export default Lista;