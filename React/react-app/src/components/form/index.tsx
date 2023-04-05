import React from "react";
import Botao from "../button";
import style from './form.module.scss'

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label>
                        Adicione um novo estudo:
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
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
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
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