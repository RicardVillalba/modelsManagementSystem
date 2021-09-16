import "./styles/modelsList.css";
import { Link } from "react-router-dom";

const ModelsList = (props) => {
  const data = props.data;
  return (
    <div className="modelsListContainer">
      <div className="modelsList">
        {data.models.map((model) => (
          <div key={model._id} model={model} className="modelsListModelCard">
            <Link to={`/model/${model._id}`} className="modelsListLinks">
              <img
                src={model.image}
                alt={model.name}
                className="modelsListModelImage"
              />
              <h1 className="modelsListModelCardInfo">{model.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ModelsList;
