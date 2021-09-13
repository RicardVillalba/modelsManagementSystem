import data from "./data";

const ModelsList = () => {
  return (
    <div className="modelsListContainer">
      {data.models.map((model) => (
        <div key={model._id}>
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
