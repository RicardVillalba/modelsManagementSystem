import { useParams } from "react-router-dom";
import "./styles/model.css";
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
      <div className="modelPageMainContent">
        <img
          src={`/${model.image}`}
          alt={model.name}
          className="modelPageMainImage"
        />
        <div className="modelPageInfoContainer">
          <div className="modelPageInfoContent">
            <p className="modelpageModelName">{model.name}</p>
            <p className="modelpageModelDescription">{model.description}</p>
            <div className="modelPageInfoDetailsContainer">
              <div className="modelPageInfoDetails">
                <p className="modelsPageInfoName">height</p>
                <p className="modelsPageInfoValue">{model.height}</p>
              </div>
              <div className="modelPageInfoDetails">
                <p className="modelsPageInfoName">bust</p>
                <p className="modelsPageInfoValue">{model.bust}</p>
              </div>
              <div className="modelPageInfoDetails">
                <p className="modelsPageInfoName">waist</p>
                <p className="modelsPageInfoValue">{model.waist}</p>
              </div>
              <div className="modelPageInfoDetails">
                <p className="modelsPageInfoName">hips</p>
                <p className="modelsPageInfoValue">{model.hips}</p>
              </div>
              <div className="modelPageInfoDetails">
                <p className="modelsPageInfoName">hair</p>
                <p className="modelsPageInfoValue">{model.hair}</p>
              </div>
              <div className="modelPageInfoDetails">
                <p className="modelsPageInfoName">eyes</p>
                <p className="modelsPageInfoValue">{model.eyes}</p>
              </div>
              <div className="modelPageInfoDetails">
                <p className="modelsPageInfoName">shoes</p>
                <p className="modelsPageInfoValue">{model.shoes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
