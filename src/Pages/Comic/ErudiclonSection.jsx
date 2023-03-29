import './ErudiclonSection.css'
import logo from '../../IMG/LOGOMENU.png'





function ErudiclonSection() {
 
  return (
    <section className="Marcamatriz container">
    <div className="contenido">
        <div>
            <h1>¿De qué trata Erudiclon?</h1>
        </div>
        <div className="textos">
            <div className="parrafo">
                <div className="descripcion">
                <p>Erudiclon es un cómic interactivo que narra la historia de la Oveja Dolly, el primer mamifero de la historia en ser clonado a partir de una célula madre. Un hecho científico que marco la historia y revolucionó el ámbito de la ciencia. Dando paso a debates sobre lo moral de la clonación y cómo este hecho impactaría la sociedad.</p>
                </div>
            </div>
            <div className='imagen'>
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default ErudiclonSection