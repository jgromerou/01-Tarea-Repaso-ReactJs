import { useState } from 'react';
import Novedades from './data/CallToAction.json';
import { useEffect } from 'react';

const Banner = () => {
  const [itemNovedades, setItemNovedades] = useState(0);
  const [news, setNews] = useState(Novedades[itemNovedades]);

  useEffect(() => {
    setNews(Novedades[itemNovedades]);
    const intervalNew = setTimeout(() => {
      itemNovedades === Novedades.length - 1
        ? setItemNovedades(0)
        : setItemNovedades((prevInterval) => prevInterval + 1);
    }, 5000);

    return () => {
      clearTimeout(intervalNew);
    };
  }, [itemNovedades]);

  return (
    <div className="bg-white p-5 text-center" id={`${news.id}`}>
      <div style={{ fontSize: '80px', fontWeight: 'bold' }}>{news.title}</div>
      <div style={{ fontSize: '30px' }}>{news.subtitle}</div>
      <div style={{ marginTop: '20px' }}>
        <button className="btn btn-primary">Comprar Ahora!</button>
      </div>
    </div>
  );
};

export default Banner;
