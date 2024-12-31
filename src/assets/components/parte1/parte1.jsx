import Header from "../header/header"
import img1 from "../../images/parte1/foto1.png"
import img2 from "../../images/parte1/foto2.png"
import icon from "../../images/parte1/icon do btn.png"
import dot1 from "../../images/parte1/Ellipse 5.png"
import dot2 from "../../images/parte1/Ellipse 8.png"
import arrow from "../../images/parte1/Expand Arrow.png"
import "./parte1.css"

function Parte1() {
    return (
        <div className="parte1">
            <Header />
            <div className="main">
                <div className="txt">
                    <h1>Paisagens</h1>
                    <p>Descubra os cenários mais deslumbrantes de Angola com o Kuenda. De praias paradisíacas a montanhas majestosas, explore paisagens naturais que encantam e inspiram. Compartilhe suas fotos e vídeos de tirar o fôlego e ajude outros a vivenciarem as maravilhas escondidas em cada canto do país.</p>
                    <button>Explore agora  <img src={icon} /></button>
                </div>
                <div className="img">
                    <img className="foto1" src={img1} />
                    <img className="foto2" src={img2} />
                    <img className="foto2 foto3" src={img2} />
                </div>
            </div>
            <div className="more">
                <div>
                    <div className="dots">
                        <img src={dot1} />
                        <img src={dot2} />
                        <img src={dot2} />
                        <img src={dot2} />
                        <img src={dot2} />
                    </div>
                    <div className="arrow">
                        <img src={arrow} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parte1