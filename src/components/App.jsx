import React from 'react';
import Card from './Card';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import ParalSeparator from './ParalSeparator';
import Services from './Services';
import Tag from './Tag';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <div className="intro">
                <Tag label="About us"/>
                <h2><span>Skillwave</span> es una Consultora joven y moderna que nace para unir a los mejores talentos tecnológicos con propuestas desafiantes de todo el mundo. </h2>
            </div>
            <div className="cards-wrapper">
                <Card 
                    iconUrl="/web-icons-company.png"
                    typeOfCard="clients"
                    cardTitle="¿Por qué nos eligen nuestros clientes?" 
                    cardText="Con nosotros tendrás la posibilidad de conocer a profesionales del mundo de la tecnología con los más altos estándares de calidad."
                    cardButton="Soy una empresa"
                />
                <Card 
                    iconUrl="/web-icons-candidate.png"
                    typeOfCard="candidates"
                    cardTitle="¿Por qué pertenecer a la comunidad de SkillWave?" 
                    cardText="Con nosotros potenciaras tu carrera con las mejores oportunidades,  descubriras nuevos proyectos y recibiras coaching de carrera."
                    cardButton="Soy un profesional"
                />
            </div>
            <ParalSeparator 
                span1="Animate" 
                span2="a nuevas"
                span3="posibilidades"
                imgUrl="url(./man-jumps-from-to-water-1168742.jpg)"
            />
            <div className="cards-wrapper services-wrapper">
                <Tag label="Services"/>
                <Services 
                    iconUrl="/web-icons-company.png"
                    typeOfCard="services"
                    cardTitle="¿Por qué nos eligen nuestros clientes?" 
                    cardText="Con nosotros tendrás la posibilidad de conocer a profesionales del mundo de la tecnología con los más altos estándares de calidad."
                    cardButton="Soy una empresa"
                />
                <Services 
                    iconUrl="/web-icons-candidate.png"
                    typeOfCard="services"
                    cardTitle="¿Por qué pertenecer a la comunidad de SkillWave?" 
                    cardText="Con nosotros potenciaras tu carrera con las mejores oportunidades,  descubriras nuevos proyectos y recibiras coaching de carrera."
                    cardButton="Soy un profesional"
                />
            </div>
            <Contact>
                <Tag label="Contact us"/>                
            </Contact>
            <Footer />
        </div>
    );
}

export default App;