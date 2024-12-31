import "./parte4.css"
import img1 from "../../images/parte4/Rectangle21.png"
import img2 from "../../images/parte4/Rectangle22.png"
import img3 from "../../images/parte4/Rectangle23.png"
import img4 from "../../images/parte4/Rectangle24.png"

function Parte4() {
    return (
        <div className="parte4">
            <div className="fotos">
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div className="last">
                    <img src={img2} />
                    <img src={img3} />
                </div>
            </div>
            <p>
                "Experimente o luxo e o conforto no coração de Angola. Relaxe em um paraiso exclusivo com vista deslumbrande e serviços de classe mundial.
                Descubra o seu proximo refugio no Kuenda"
            </p>
        </div>
    )
}

export default Parte4;