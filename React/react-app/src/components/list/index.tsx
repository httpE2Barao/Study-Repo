import style from './list.module.scss';
import Item from "./item";
import { Itarefa } from '../../types/tarefa';

function Lista({ tarefas }: {tarefas: Itarefa[]}) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={index}
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