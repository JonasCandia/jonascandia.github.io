import React, { useContext, useEffect, useState }from 'react';
// import propTypes from 'prop-types';
import AppContext from '../contexts/AppContext';
// import saveLocalStorage from '../helpers/saveLocalStorage';

const Login = ({ history }) => {
  const {
    ptbr,
    us,
    language,
    setLanguage,
    setVisitor,
  } = useContext(AppContext);
  const [vst, setVst] = useState('')
  const [lng, setLng] = useState({
    text1: ptbr.text1,
    text2: ptbr.text2,
    text3: ptbr.text3,
    text4: ptbr.text4,
    text5: ptbr.text5,
    text6: ptbr.text6,
    text7: ptbr.text7,
    button: ptbr.button,
    place: ptbr.place

  })
  
  useEffect(() => {
    if (language === 'Pt-Br') {
      setLng({
        text1: ptbr.text1,
        text2: ptbr.text2,
        text3: ptbr.text3,
        text4: ptbr.text4,
        text5: ptbr.text5,
        text6: ptbr.text6,
        text7: ptbr.text7,
        button: ptbr.button,
        place: ptbr.place
      })
    } else {
      setLng({
        text1: us.text1,
        text2: us.text2,
        text3: us.text3,
        text4: us.text4,
        text5: us.text5,
        text6: us.text6,
        text7: us.text7,
        button: us.button,
        place: us.place
      })
    }
  }, [language]);

  // const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  // const six = 6;

  return (
    <div>
      <header>
        <button
          type='button'
          onClick={() => setLanguage('Pt-Br')}
        >
          Pt-Br
        </button>
        <button
          type='button'
          onClick={() => setLanguage('Us')}
        >
          Us
        </button>
        <h1>{lng.text1}</h1>
        <h2>{lng.text2}</h2>
        <h4>{lng.text3}</h4>
        <h4>{lng.text4}</h4>
        <h3>{lng.text5}</h3>
        <h4>{lng.text6}</h4>
      </header>
      <main>
        <p>{lng.text7}</p>
        <input
          type="text"
          id='visitor'
          placeholder={lng.place}
          onChange={
            ({ target: { value } }) => setVst(value)
          }
        />
        <button
          type='button'
          onClick={() => {
            history.push('/home')
            setVisitor(vst)
          }}
        >{lng.button}</button>
      </main>
    </div>
  );
};

// Login.propTypes = {
//   push: propTypes.func,
// }.isRequired;

export default Login;