import './Kin.css'

const Kin = ({ nome, caracteristicas, imagem, bgColor }) => {
    return (
        <div className='kin'>
            <div className='cabecalho' style={{ backgroundColor: bgColor }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{caracteristicas}</h5>
            </div>
        </div>
    )
}
export default Kin