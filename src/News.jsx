import NewsItem from './NewsItem';
import Novedades from './data/Novedades';

const News = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom text-white">NOVEDADES</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {Novedades.map((item) => (
          <NewsItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default News;
