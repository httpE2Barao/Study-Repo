import React from 'react';
import style from './button.module.scss';

class Botao extends React.Component<{ texto:string, 
    type?: "button" | "submit" | "reset"}> {

    render() {
        const { type = 'button' } = this.props
        return (
            <button type={type} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao;