import style from '../list.module.scss'
import { Itarefa } from '../../../types/tarefa.js'

export default function Item({tarefa, tempo, selecionado, completo, id}: Itarefa ) {
    console.log('item atual: ', {tarefa, tempo, selecionado, completo, id})
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}