import "./parte.css"
import icon from "../../images/parte1/icon do btn.png"

function Parte5() {
    return (
        <div className="parte5">
            <div>
                <h1>Planeie a sua viagem agora</h1>
                <p className = "sele">Selecione  o seu proximo destino</p>
                <p className="la">Luanda, Angola</p>
                <form>
                    <div>
                        <label htmlFor="partida">Dia de partida</label><br />
                        <select name="patida">
                            <option>Quarta, 23 de junho</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="partida">Dia de partida</label><br />
                        <select name="patida">
                            <option>Quarta, 23 de junho</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="partida">Dia de partida</label><br />
                        <select name="patida">
                            <option>Quarta, 23 de junho</option>
                        </select>
                    </div>
                </form>
                <button>Explore locais agora  <img src={icon} /></button>
            </div>
        </div>
    )
}

export default Parte5;