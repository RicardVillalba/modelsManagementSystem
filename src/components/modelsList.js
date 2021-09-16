import "./styles/modelsList.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const ModelsList = (props) => {
  const data = props.data;
  return (
    <div className="modelsListContainer">
      <div className="modelsList">
        {data.models.map((model) => (
          <motion.div
            key={model._id}
            model={model}
            className="modelsListModelCard"
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <Link
              to={`/model/${model._id}`}
              className="modelsListLinks"
              exit={{ opacity: 0 }}
              transition={transition}
            >
              {" "}
              <motion.div
                whileHover={{ scaleX: 1.01, scaleY: 1.02 }}
                transition={transition}
                exit={{ opacity: 0 }}
              >
                <motion.img
                  src={model.image}
                  alt={model.name}
                  className="modelsListModelImage"
                />
                <h1 className="modelsListModelCardInfo">{model.name}</h1>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ModelsList;
