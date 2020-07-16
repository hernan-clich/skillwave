import React, {useState, useEffect, useRef} from 'react';
import Card from './Card';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import LangPicker from './LangPicker';
import ParalSeparator from './ParalSeparator';
import Services from './Services';
import Tag from './Tag';
import Testimonials from './Testimonials';
import {contentText} from './Text';

function App() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const testimonialsRef = useRef(null);
    const contactRef = useRef(null);
    const storedLang = localStorage.getItem("engLang");
    const [englishLang, setLang] = useState(storedLang ? 
        JSON.parse(localStorage.getItem("engLang")) : true);
    //const changeLangFromChild = newStuff => setLang(newStuff);
    useEffect(() => {
        localStorage.setItem("engLang", JSON.stringify(englishLang));
    }, [englishLang]);

    return (
        <>
            <Header
                linkOne={englishLang ? contentText.header.linkTwoEng : contentText.header.linkTwoEsp} 
                linkTwo={englishLang ? contentText.header.linkOneEng : contentText.header.linkOneEsp}
                linkThree={englishLang ? contentText.header.linkThreeEng : contentText.header.linkThreeEsp} 
                linkFour={englishLang ? contentText.header.linkFourEng : contentText.header.linkFourEsp} 
                setHeaderState={setLang}
                headerState={englishLang}
                ref={{
                    heroRef,
                    contactRef, 
                    aboutRef,
                    servicesRef,
                    testimonialsRef
                }}
            >
                <LangPicker
                    clickEng={() => {setLang(true)}} 
                    clickEsp={() => {setLang(false)}}
                />
            </Header>
            <Hero 
                subtitle={englishLang ? contentText.hero.subtitleEng : contentText.hero.subtitleEsp}
                heroBtn={englishLang ? contentText.hero.heroBtnEng : contentText.hero.heroBtnEsp}
                ref={heroRef}
                contRef={contactRef}
            />
            <div ref={aboutRef} className="intro" id="about-us">
                <Tag label={englishLang ? contentText.tags.tagAboutEng : contentText.tags.tagAboutEsp}/>
                <h2><span>Skillwave</span> {englishLang ? contentText.intro.introEng : contentText.intro.introEsp} </h2>
            </div>
            <div className="cards-wrapper">
                <Card 
                    iconUrl="./assets/web-icons-company.png"
                    typeOfCard="clients"
                    cardTitle={englishLang ? contentText.cards.ClientTitleEng : contentText.cards.ClientTitleEsp} 
                    cardText={englishLang ? contentText.cards.ClientTextEng : contentText.cards.ClientTextEsp}
                    cardButton={englishLang ? contentText.cards.ClientButtonEng : contentText.cards.ClientButtonEsp}
                />
                <Card 
                    iconUrl="./assets/web-icons-candidate.png"
                    typeOfCard="candidates"
                    cardTitle={englishLang ? contentText.cards.CandidTitleEng : contentText.cards.CandidTitleEsp} 
                    cardText={englishLang ? contentText.cards.CandidTextEng : contentText.cards.CandidTextEsp}
                    cardButton={englishLang ? contentText.cards.CandidButtonEng : contentText.cards.CandidButtonEsp}
                />
            </div>
            <div ref={servicesRef} className="serv-container">
                <div className="serv-header" id="services">
                    <h3>{englishLang ? contentText.services.servTitleEng : contentText.services.servTitleEsp}</h3>
                </div>
                <div className="serv-overlay">
                    <Services 
                        servTitle={englishLang ? contentText.services.serv1TitleEng : contentText.services.serv1TitleEsp} 
                        servText={englishLang ? contentText.services.serv1TextEng : contentText.services.serv1TextEsp} 
                        imgServSrc={"./assets/our-dev.png"}
                    />
                    <Services 
                        servTitle={englishLang ? contentText.services.serv2TitleEng : contentText.services.serv2TitleEsp}  
                        servText={englishLang ? contentText.services.serv2TextEng : contentText.services.serv2TextEsp} 
                        imgServSrc={"./assets/la-lic.png"}
                    />
                </div>
            </div>
            <ParalSeparator 
                span1={englishLang ? contentText.separator.sepa1Eng : contentText.separator.sepa1Esp}
                span2={englishLang ? contentText.separator.sepa2Eng : contentText.separator.sepa2Esp}
                span3={englishLang ? contentText.separator.sepa3Eng : contentText.separator.sepa3Esp}
                imgUrl="url(./assets/man-jumps-from-to-water-1168742.png)"
            />
            <Testimonials 
                testiState={englishLang}
                ref={testimonialsRef}
            />
            <Contact
                labelOne={englishLang ? contentText.contact.labelOneEng : contentText.contact.labelOneEsp} 
                labelTwo={englishLang ? contentText.contact.labelTwoEng : contentText.contact.labelTwoEsp} 
                labelThree={englishLang ? contentText.contact.labelThreeEng : contentText.contact.labelThreeEsp} 
                btnText={englishLang ? contentText.contact.btnTextEng : contentText.contact.btnTextEsp} 
                errorName={englishLang ? contentText.contact.errorNameEng : contentText.contact.errorNameEsp} 
                errorEmail={englishLang ? contentText.contact.errorEmailEng : contentText.contact.errorEmailEsp} 
                errorMsg={englishLang ? contentText.contact.errorMsgEng : contentText.contact.errorMsgEsp} 
                contCardHeader={englishLang ? contentText.contact.contCardHeaderEng : contentText.contact.contCardHeaderEsp} 
                modalTitle={englishLang ? contentText.contact.modalTitleEng : contentText.contact.modalTitleEsp} 
                modalText={englishLang ? contentText.contact.modalTextEng : contentText.contact.modalTextEsp} 
                modalBtn={englishLang ? contentText.contact.modalBtnEng : contentText.contact.modalBtnEsp} 
                ref={contactRef}
            >
                <Tag label={englishLang ? contentText.tags.tagContactEng : contentText.tags.tagContactEsp}/>
            </Contact>
            <Footer/>
        </>
    );
}

export default App;