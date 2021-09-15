import "./styles/modelsList.css";

const ModelsList = (props) => {
  const data = props.data;
  return (
    <div className="modelsListContainer">
      <div className="modelsList">
        {data.models.map((model) => (
          <div key={model._id} model={model} className="modelsListModelCard">
            <a href={`/model/${model._id}`}>
              <img
                src={model.image}
                alt={model.name}
                className="modelsListModelImage"
              />
              <h1 className="modelsListModelCardInfo">{model.name}</h1>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ModelsList;
