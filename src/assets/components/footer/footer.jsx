import "./footer.css"
import img1 from "../../images/footer/facebook.png"
import img2 from "../../images/footer/twiter.png"
import img3 from "../../images/footer/Vector.png"
import google from "../../images/footer/appstore.png"
import google2 from "../../images/footer/playstore.png"

function Footer() {
    return (
        <footer>
            <div className="footer1">
                <div className="um">
                    <h1>Kuenda</h1>
                    <p>Viva, Compartilhe e Inspire!</p>
                    <div className="img">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                    </div>
                </div>

                <div className="dois">
                    <h2>Links Rapidos</h2>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Nós</li>
                        <li>Produtos</li>
                        <li>Preços</li>
                        <li>Contacto</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="tres">
                    <h2>Contactos</h2>
                    <ul>
                        <li>Endereço: Rua das Acácias, Luanda, Angola</li>
                        <li>Telefone: +244 931 153 086</li>
                        <li>Email: suporte@kuenda.com</li>
                    </ul>
                    <div className="google">
                        <img src={google} />
                        <img src={google2} />
                    </div>

                    <p>Receba novidades e descubra os melhores lugares antes de todo mundo!</p>
                    <div className="btn">
                        <button className="btn1">ricardo.tonio@email.com</button>
                        <button className="btn2">Inscrever-se</button>
                    </div>
                </div>

            </div>

            <hr />

            <div className="footer2">
                <div className="copy">
                    <p className="right">© 2024 Kuenda. Todos os direitos reservados</p>
                    <div className="outros">
                        <p>Termos de Serviço</p>
                        <p>Política de Privacidade</p>
                        <p>Site Map</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;