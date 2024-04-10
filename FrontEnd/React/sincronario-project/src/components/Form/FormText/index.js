import { useState } from 'react'
import './FormText.css'

const CampoTexto = (props) => {

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input 
                value={props.valor}
                onChange={(event) =>
                    props.aoAlterado(event.target.value)}
                required={props.obrigatorio} 
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default CampoTexto