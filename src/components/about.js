import "./styles/about.css";

const About = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div className="aboutContainer">
      <h1 className="aboutTitle">about</h1>
      <p className="aboutText"></p>
    </div>
  );
};

export default About;
