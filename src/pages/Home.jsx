import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const Home = () => {
  const { visitor } = useContext(AppContext);
  
  return (
    <div>
      <p>{visitor}</p>
    </div>
  )
}

export default Home;