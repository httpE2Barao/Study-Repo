import style from './item.module.scss'
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
    return (
        <li 
            className={`${style.item} ${selecionado ? style.
            itemSelecionado : ''} ${completo ? style.itemCompletado : ''}`} onClick={() => !completo && selecionaTarefa(
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
            {completo && <span className={style.concluido} aria-label='Tarefa completada!'></span>}
        </li>
    )
}