import { useParams } from "react-router-dom";

const Model = (props) => {
  function GetId() {
    const { id } = useParams();
    return id;
  }
  const modelId = GetId();
  console.log(typeof modelId);
  //////////////////////
  const data = props.data;

  //   console.log(props.data.models);
  const model = data.models.find((model) => model._id === parseInt(modelId));

  console.log(model);
  return (
    <div className="modelContainer">
      <img src={`/${model.image}`} alt={model.name} />
      <div className="modelInfo">
        <p>{model.name}</p>
        <p>{model.age}</p>
      </div>
    </div>
  );
};

export default Model;
