import { useState } from 'react'
import ListaGenerica from './ListGen'
import CampoTexto from './FormText'
import './Form.css'
import Botao from './Button'

const Formulario = () => {

    const opcoes = [
        'Selecione:',
        'Fogo',
        'Sangue',
        'Verdade',
        'Céu'
    ]

    const [kin, setKin] = useState('')
    const [caracteristicas, setCaracteristicas] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        console.log(kin, caracteristicas, imagem)
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Kin' 
                    placeholder='Digite o kin' 
                    aoAlterado={valor => setKin(valor)}    
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Características' 
                    placeholder='Características do kin' 
                    aoAlterado={valor => setCaracteristicas(valor)}   
                /> 
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem' 
                    aoAlterado={valor => setImagem(valor)}    
                />
                <ListaGenerica 
                    obrigatorio={true} 
                    label='Clã' 
                    itens={opcoes}/>
                <Botao>
                    Incluir kin
                </Botao>
            </form>
        </section>
    )
}
export default Formulario