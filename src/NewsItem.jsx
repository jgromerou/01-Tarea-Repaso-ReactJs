const NovedadesItem = ({ data }) => {
  return (
    <div className="feature col text-white" id={`{data.id}`}>
      <h3 className="fs-2">{data.title}</h3>
      <p>{data.description}</p>
      <a href="#" className="text-warning">
        Call to action
      </a>
    </div>
  );
};

export default NovedadesItem;
