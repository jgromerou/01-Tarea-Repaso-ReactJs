import { useState } from 'react';
import CallToAction from './data/CallToAction.json';
import { useEffect } from 'react';

const Banner = () => {
  const [itemCallToAction, setItemCallToAction] = useState(0);
  const [news, setNews] = useState(CallToAction[itemCallToAction]);

  useEffect(() => {
    setNews(CallToAction[itemCallToAction]);
    const intervalCall = setTimeout(() => {
      itemCallToAction === CallToAction.length - 1
        ? setItemCallToAction(0)
        : setItemCallToAction((prevInterval) => prevInterval + 1);
    }, 5000);

    return () => {
      clearTimeout(intervalCall);
    };
  }, [itemCallToAction]);

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
