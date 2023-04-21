import { useState } from 'react'
import ListaGenerica from './ListGen'
import CampoTexto from './FormText'
import './Form.css'
import Botao from './Button'

const Formulario = (props) => {

    const opcoes = [
        // 'Selecione:',
        'Fogo',
        'Sangue',
        'Verdade',
        'Céu'
    ]

    const [kin, setKin] = useState('')
    const [caracteristicas, setCaracteristicas] = useState('')
    const [imagem, setImagem] = useState('')
    const [cla, setCla] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoCadastrarKin({
            kin,
            caracteristicas,
            imagem,
            cla
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Kin' 
                    placeholder='Digite o kin' 
                    valor={kin}
                    aoAlterado={valor => setKin(valor)}    
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Características' 
                    placeholder='Características do kin' 
                    valor={caracteristicas}
                    aoAlterado={valor => setCaracteristicas(valor)}   
                /> 
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}    
                />
                <ListaGenerica 
                    obrigatorio={true} 
                    label='Clã' 
                    itens={opcoes}
                    valor={cla}
                    aoAlterado={valor => setCla(valor)}
                />
                <Botao>
                    Incluir kin
                </Botao>
            </form>
        </section>
    )
}
export default Formulario