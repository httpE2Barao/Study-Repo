import style from '../list.module.scss'
import { Itarefa } from '../../../types/tarefa.js'

interface Props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada:Itarefa) => void
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completo,
        id,
        selecionaTarefa
    }: Props ) {
    console.log('item atual: ', {tarefa, tempo, selecionado, completo, id})
    ;
    return (
        <li className={style.item} onClick={() => selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completo,
                    id
                }
            )}
        >
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}