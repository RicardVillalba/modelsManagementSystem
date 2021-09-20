import "./styles/about.css";

const About = (props) => {
  const data = props.data;

  return (
    <div className="aboutContainer">
      {data.aboutSection.map((about) => (
        <div key={about._id} about={about}>
          <h1 className="aboutTitle">{about.title}</h1>
          <p className="aboutText">{about.text}</p>
        </div>
      ))}
    </div>
  );
};

export default About;

// const about = data.aboutSection.map((about) => about);
// console.log(about.title);
