import React from 'react';

import NavBar from './components/NavBar';

export const HomePage = () => {
  return (
    <>
     <NavBar />
      <box>
        <div className='bg-banner'>
          <div style={{fontSize: '80px', fontWeight: 'bold'}}>WEEK SALE!</div>
          <div style={{fontSize: '30px'}}>Las mejores ofertas en celulares!</div>
          <div style={{ marginTop: '20px'}}>
            <button className='btn btn-primary'>Comprar Ahora!</button>
          </div>
        </div>
      </box>
    </>
  )
}
