import React, {useState} from 'react';
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
    const [englishLang, setLang] = useState(true);

    return (
        <div className="bg">
            <Header
                linkOne={englishLang ? contentText.header.linkOneEng : contentText.header.linkOneEsp}
                linkTwo={englishLang ? contentText.header.linkTwoEng : contentText.header.linkTwoEsp} 
                linkThree={englishLang ? contentText.header.linkThreeEng : contentText.header.linkThreeEsp} 
            >
                <LangPicker
                    clickEng={() => {setLang(true)}} 
                    clickEsp={() => {setLang(false)}}
                />
            </Header>
            <Hero 
                subtitle={englishLang ? contentText.hero.subtitleEng : contentText.hero.subtitleEsp}
            />
            <div className="intro" id="about-us">
                <Tag label={englishLang ? contentText.tags.tagAboutEng : contentText.tags.tagAboutEsp}/>
                <h2><span>Skillwave</span> {englishLang ? contentText.intro.introEng : contentText.intro.introEsp} </h2>
            </div>
            <div className="cards-wrapper">
                <Card 
                    iconUrl="/web-icons-company.png"
                    typeOfCard="clients"
                    cardTitle={englishLang ? contentText.cards.ClientTitleEng : contentText.cards.ClientTitleEsp} 
                    cardText={englishLang ? contentText.cards.ClientTextEng : contentText.cards.ClientTextEsp}
                    cardButton={englishLang ? contentText.cards.ClientButtonEng : contentText.cards.ClientButtonEsp}
                />
                <Card 
                    iconUrl="/web-icons-candidate.png"
                    typeOfCard="candidates"
                    cardTitle={englishLang ? contentText.cards.CandidTitleEng : contentText.cards.CandidTitleEsp} 
                    cardText={englishLang ? contentText.cards.CandidTextEng : contentText.cards.CandidTextEsp}
                    cardButton={englishLang ? contentText.cards.CandidButtonEng : contentText.cards.CandidButtonEsp}
                />
            </div>
            <ParalSeparator 
                span1={englishLang ? contentText.separator.sepa1Eng : contentText.separator.sepa1Esp}
                span2={englishLang ? contentText.separator.sepa2Eng : contentText.separator.sepa2Esp}
                span3={englishLang ? contentText.separator.sepa3Eng : contentText.separator.sepa3Esp}
                imgUrl="url(./man-jumps-from-to-water-1168742.jpg)"
            />
            <div className="serv-header" id="services">
                <h3>{englishLang ? contentText.services.servTitleEng : contentText.services.servTitleEsp}</h3>
            </div>
            <div className="serv-container">
                <Services 
                    servTitle={englishLang ? contentText.services.serv1TitleEng : contentText.services.serv1TitleEsp} 
                    servText={englishLang ? contentText.services.serv1TextEng : contentText.services.serv1TextEsp} 
                />
                <Services 
                    servTitle={englishLang ? contentText.services.serv2TitleEng : contentText.services.serv2TitleEsp}  
                    servText={englishLang ? contentText.services.serv2TextEng : contentText.services.serv2TextEsp} 
                />
            </div>
            <Testimonials 
                testiState={englishLang}
            />
            <Contact
                labelOne={englishLang ? contentText.contact.labelOneEng : contentText.contact.labelOneEsp} 
                labelTwo={englishLang ? contentText.contact.labelTwoEng : contentText.contact.labelTwoEsp} 
                labelThree={englishLang ? contentText.contact.labelThreeEng : contentText.contact.labelThreeEsp} 
                btnText={englishLang ? contentText.contact.btnTextEng : contentText.contact.btnTextEsp} 
            >
                <Tag label={englishLang ? contentText.tags.tagContactEng : contentText.tags.tagContactEsp}/>
            </Contact>
            <Footer />
        </div>
    );
}

export default App;