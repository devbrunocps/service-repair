import Section1 from './Section1';
import Section2 from './Section2';
import './style.css'

export default function Home() {
    return (
        <section id="home">
            <Section1 />
            <Section2 />
        </section>
    )
}