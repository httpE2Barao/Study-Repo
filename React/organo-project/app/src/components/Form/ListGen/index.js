import './ListGen.css'

const ListaGenerica = (props) => {

    return (
        <div className='lista-generica'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => 
                    <option key={item}>{item}</option>)}
            </select>
        </div>
    )
} 

export default ListaGenerica