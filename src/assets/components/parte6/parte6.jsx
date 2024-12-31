import img1 from "../../images/parte6/Rectangle16.png"
import img2 from "../../images/parte6/Rectangle29.png"
import img3 from "../../images/parte6/Rectangle30.png"
import img4 from "../../images/parte6/Rectangle31.png"
import img5 from "../../images/parte6/Rectangle32.png"
import img6 from "../../images/parte6/Rectangle33.png"
import "./parte6.css"

function Parte6() {
    return (
        <div className="parte6">
            <h1>A beleza de Angola ao seu alcance
                Descubra seu destino dos sonhos!</h1>
            <p>Desfrute de vistas incríveis, conforto moderno e serviços personalizados. O lugar perfeito para relaxar ou se aventurar. Viva a essência de Angola e crie memórias inesquecíveis.</p>
            <div className="content">
                <div className="first">
                    <img src={img1} />
                    <img src={img3} />
                    <img src={img4} />
                </div>
                <div className="second">
                    <img src={img2} />
                    <img src={img5} />
                    <img src={img6} />
                </div>
            </div>
        </div>
    )
}

export default Parte6
