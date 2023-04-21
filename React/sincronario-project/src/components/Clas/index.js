import Kin from '../Kin'
import './Clas.css'

//    Clãs
const Clas = (props) => {
    
    const bgColor = { backgroundColor: props.corSecundaria }
    const borderColor = { borderColor: props.corPrimaria }
    
    return (
        (props.kins.length > 0) && <section className='cla' style={bgColor}>
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='kins'>
                {props.kins.map( kin => 
                    <Kin 
                        nome={kin.kin}
                        imagem={kin.imagem}
                        caracteristicas={kin.caracteristicas}
                        key={kin.kin}
                        bgColor={props.corPrimaria}
                    />)}
            </div>
        </section>
    )
}

export default Clas