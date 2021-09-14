const ModelsList = (props) => {
  const data = props.data;
  return (
    <div className="modelsListContainer">
      {data.models.map((model) => (
        <div key={model._id} model={model}>
          <a href={`/model/${model._id}`}>
            <img src={model.image} alt={model.name} />
          </a>
          <h1>{model.name}</h1>
        </div>
      ))}
    </div>
  );
};
export default ModelsList;
