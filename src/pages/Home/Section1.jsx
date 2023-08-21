import { BsWrench, BsShieldCheck, BsClock } from "react-icons/bs";

export default function Section1() {
    return (
        <div className="section1">
            <div className="context">
                <div className="title">
                    <span><span style={{ color: 'var(--main-color)' }}>REPARAMOS</span> TODOS OS TIPOS DE DISPOSITIVOS. CELULARES, TABLETS NOTEBOOKS, ETC...</span>
                </div>
                <div className="services">
                    <div className="service">
                        <BsWrench className="icon" />
                        <span>Reparos eletrônicos</span>
                    </div>
                    <div className="service">
                        <BsShieldCheck className='icon' />
                        <span>Garantia de qualidade</span>
                    </div>
                    <div className="service">
                        <BsClock className="icon" />
                        <span>Serviços rápidos</span>
                    </div>
                </div>
                <div className="view-services">
                    <a href="/services"><button>Veja nossos serviços</button></a>
                </div>
            </div>
            <div className="image">
                <img src="images/home-section1.jpg" alt="" />
            </div>
        </div>
    )
}