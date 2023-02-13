import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('Pt-Br');
  const [visitor, setVisitor] = useState('');
  const [ptbr, setPtbr] = useState({
    text1: 'Olá e bem vindo ao meu portifólio!',
    text2: 'Me chamo Jonas Candia e sou Desenvolvedor Front-end.',
    text3: 'Este portifólio é uma vitrine de minhas habilidades, realizações, e experiencias em meu campo. Por meio desssa plataforma, o meu objetivo é dar a você um pequeno vislumbre do meu processo criativo, dos projetos em que trabalhei e do impacto que causei.',
    text4: 'Seja você um cliente em potencial, empregador ou simplesmente um curioso sobre o que eu faço, lhe convido a explorar as diferentes seções do meu portfólio para saber mais de mim e do meu trabalho.',
    text5: 'Se tiver alguma duvida ou quiser bater um papo sobre meu trabalho, não hesite em entrar em contato.',
    text6: 'Obrigado pela visita!',
    text7: 'Por favor. Dgite seu nome para continuarmos!',
    button: 'Vamos lá!',
    place: 'Seu nome aqui'
  });
  const [us, setUs] = useState({
    text1: 'Hello and welcome to my online portfolio!',
    text2: 'My name is Jonas Candia, and i am a developer Front-End.',
    text3: 'This portfolio is a showcase of my skills, achievements, and experiences in my field. Through this platform, i aim to give you a glimpse into my creative process, the projects i have worked on, and the impact i have made.',
    text4: "Whether you're a potential client, employer, or simply curious about what I do, i invite you to explore the different sections of my portfolio and learn more about me and my work.",
    text5: "If you have any questions or want to connect with me, please don't hesitate to reach out.",
    text6: 'Thank you for stopping by!',
    text7: 'Please. Enter your name to continue!',
    button: "Let's go",
    place: 'Your name here'
  });

  const data = {
    email,
    setEmail,
    password,
    setPassword,
    ptbr,
    setPtbr,
    us,
    setUs,
    language,
    setLanguage,
    visitor,
    setVisitor,
  };

  return (
    <AppContext.Provider value={ data }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.props,
}.isRequired;

export default AppProvider;
