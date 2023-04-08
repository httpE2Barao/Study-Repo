import React from 'react';
import style from './button.module.scss';

class Botao extends React.Component<{ texto:string, 
    type?: "button" | "submit" | "reset"
    onClick?: () => void
}> {

    render() {
        const { type = 'button', onClick } = this.props
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Botao;