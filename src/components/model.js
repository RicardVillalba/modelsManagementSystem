import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import "./styles/model.css";

const transition = {
  duration: 1.2,

  ease: [0.43, 0.13, 0.23, 0.96],
};
const transitionName = {
  duration: 0.9,
  ease: [0.43, 0.13, 0.23, 0.96],
  delay: 0.2,
};

const transitionExit = {
  duration: 1,

  ease: [0.43, 0.13, 0.23, 0.96],
};

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

  // console.log(model);
  return (
    <motion.div
      className="modelContainer"
      exit={{ opacity: 0 }}
      transition={transitionExit}
    >
      <div className="modelPageMainContent">
        <motion.img
          src={`/${model.image}`}
          alt={model.name}
          className="modelPageMainImage"
          initial={{ opacity: 0, y: 9 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        />
        <div className="modelPageInfoContainer">
          <div className="modelPageInfoContent">
            <motion.p
              className="modelpageModelName"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transitionName}
            >
              {model.name}
            </motion.p>
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
    </motion.div>
  );
};

export default Model;
