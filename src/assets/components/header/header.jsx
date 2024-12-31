import "./header.css"

function Header() {
    return (
        <div className="header">
            <p>Kuenda</p>
            <ul>
                <li>Locais</li>
                <li>Eventos</li>
                <li>Sobre nos</li>
                <li><button>Login</button></li>
            </ul>
        </div>
    )
}

export default Header