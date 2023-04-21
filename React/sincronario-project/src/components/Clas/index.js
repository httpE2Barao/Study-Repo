import './Clas.css'

//    Clãs
const Clas = (props) => {
    
    const bgColor = { backgroundColor: props.corSecundaria }
    const borderColor = { borderColor: props.corPrimaria }
    
    return (
        <section className='cla' style={bgColor}>
            <h3 style={borderColor}>{props.nome}</h3>
        </section>
    )
}

export default Clas