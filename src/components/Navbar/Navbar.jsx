import { useState } from "react"
import './style.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="logo">
                <span>SERVICE REPAIR</span>
            </div>
            <div className="navigation">
                <a href="/" className="nav-item">Início</a>
                <a href="/services" className="nav-item">Serviços</a>
                <a href="/about" className="nav-item">Sobre nós</a>
                <a href="/contact" className="nav-item">Contato</a>
            </div>
            <div className={`nav-hamburguer ${isOpen ? 'active' : ''}`} id="nav-hamburguer">
                <div className="hamburguer-icon" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className="nav-menu">
                    <a href="/" className="nav-item">Início</a>
                    <a href="/services" className="nav-item">Serviços</a>
                    <a href="/about" className="nav-item">Sobre nós</a>
                    <a href="/contact" className="nav-item">Contato</a>
                </div>
            </div>
        </nav>
    )
}