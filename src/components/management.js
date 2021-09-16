import "./styles/management.css";
import { Link } from "react-router-dom";
const Management = () => {
  return (
    <div className="addFormContainer">
      <div className="formHearder">
        <h1>add model form</h1>
        <Link to="/">
          <button className="closeFormButton">close</button>
        </Link>
      </div>

      <form className="addForm">
        <label>Name</label>
        <input name="modelName" value="" />
        <label>firs surname</label>
        <input name="modelSurname1" value="" />
        <label>second surname</label>
        <input name="modelSurname2" value="" />
        <label>age</label>
        <input type="number" name="modelAge" value="{formValues.modelAge}" />
        <label>photo</label>
        <input type="submit" value="Submit" className="submitButton" />
      </form>
    </div>
  );
};

export default Management;
