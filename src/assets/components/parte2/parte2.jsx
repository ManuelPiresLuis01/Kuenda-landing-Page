import "./parte2.css"
import img1 from "../../images/parte2/parte2.png"
function Parte2() {
    return (
        <div className="parte2">
            <div className="text">
                <p>
                "Experimente o luxo e o conforto no coração de Angola. Relaxe em um paraíso exclusivo com vista deslumbrante e serviços de classe mundial. Descubra o seu próximo refúgio no Kuenda!"
                </p>
            </div>
            <div className="images">
                <img src={img1} className="image1"/>
            </div>
        </div>
    )
}

export default Parte2;