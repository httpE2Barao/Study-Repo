import React from "react";
import Botao from "../button";
import style from './form.module.scss'

class Formulario extends React.Component {
    state = {
        tarefa: '',
        tempo: '00:00'
    }

    addTarefa(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label>
                        Adicione um novo estudo:
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        onChange={event=> this.setState({ ...this.state,
                            tarefa: event.target.value})}
                        placeholder="O que você quer estudar"
                    />
                </div>
                <div className={style.inputContainer}>
                    <label>
                        Tempo definido:
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={(event)=> this.setState({...this.state,
                             tempo: event.target.value})}
                        id="tempo"
                        min="00:00:00"
                        max="02:30:00"
                        required
                    />
                </div>
                <Botao 
                    texto='Adicionar'
                />
            </form>
        )
    }
}
export default Formulario;