import "./styles/modelsList.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const ModelsList = (props) => {
  const data = props.data;
  // console.log(data);
  return (
    <motion.div
      className="modelsListContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <div className="modelsList">
        {data.models.map((model) => (
          <div key={model._id} model={model} className="modelsListModelCard">
            <Link to={`/model/${model._id}`} className="modelsListLinks">
              <motion.img
                src={model.image}
                alt={model.name}
                className="modelsListModelImage"
                whileHover={{ scaleX: 1.01, scaleY: 1.02 }}
                transition={transition}
              />
              <h1 className="modelsListModelCardInfo">{model.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default ModelsList;
