import './ListGen.css'

const ListaGenerica = (props) => {

    return (
        <div className='lista-generica'>
            <label>{props.label}</label>
            <select 
                onChange={(event) => props.aoAlterado(event.target.value)} 
                required={props.obrigatorio} 
                value={props.valor}
            >
            <option value=''></option>
            {props.itens.map(item => 
                <option key={item}>{item}</option>)}
            </select>
        </div>
    )
} 

export default ListaGenerica