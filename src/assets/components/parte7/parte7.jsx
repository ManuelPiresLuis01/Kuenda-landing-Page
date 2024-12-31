import "./parte7.css"
import Card from "../cardTestemunas/card"
import img1 from "../../images/parte7/Ellipse10.png"
import img2 from "../../images/parte7/Ellipse11.png"
import img3 from "../../images/parte7/Ellipse12.png"



function Parte7() {
    return (
        <div className="parte7">
            <h1>O que outras pessoas falam de nós</h1>
            <div className="testemunhas">
                <Card 
                desc = "Eu sempre tive dificuldades em encontrar bons lugares para relaxar e curtir a natureza. Com o Kuenda, encontrei praias paradisíacas e restaurantes incríveis que eu nem sabia que existiam! Agora, cada final de semana é uma nova descoberta. Simplesmente amo!"
                foto = {img1}
                nome = "Ana Silva"
                cargo = "Usuario do Kuenda"
                />
                <Card 
                desc = "“Sou dona de um restaurante e o Kuenda nos trouxe muitos clientes novos! Agora, consigo postar fotos e vídeos dos nossos pratos e atrair turistas e locais que estão sempre buscando experiências diferentes. É uma plataforma incrível para divulgar nosso trabalho!”"
                foto = {img2}
                nome = "Mariana Lopes"
                cargo = "Empresária e Parceira do Kuenda"
                />
                <Card 
                desc = "“Eu precisava organizar um evento e, com o Kuenda, consegui achar o local perfeito. Além disso, tenho usado o app para explorar novos restaurantes e pontos turísticos com minha família. A qualidade das recomendações e os vídeos ajudam muito na escolha. Recomendo!”"
                foto = {img3}
                nome = "Pedro Almeida"
                cargo = "Organizador de Eventos"
                />
            </div>
        </div>
    )
}

export default Parte7;