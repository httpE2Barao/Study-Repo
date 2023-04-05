import React from "react";
import style from './list.module.scss';
import Item from "./item";

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'Typescript',
        tempo: '01:00:00'
    },{
        tarefa: 'Javascript',
        tempo: '00:45:00'
    }
    ]
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
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