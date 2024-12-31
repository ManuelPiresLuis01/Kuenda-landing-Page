import "./card.css"
import star from "../../images/parte7/Star1.png"

function Card(p) {
    return (
        <div className="cards">
                <div className="card">
                    <div className="star">
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                    </div>
                    <p className="desc">
                        {p.desc}
                    </p>
                    <img className="foto" src={p.foto} />
                    <p className="nome">
                        <span>{p.nome}</span>
                        <br />
                        {p.cargo}
                    </p>
                </div>
        </div>
    )
}

export default Card;