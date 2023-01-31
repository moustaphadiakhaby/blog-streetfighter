import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = (props) => {
  return (
    <div className="aboutme">
      <ItemTitle name={props.name} />
      <ItemPicture img={props.img} />
      <ItemPicture img={props.img2} />
      <ItemDescription desc={props.desc} />
    </div>
  );
};

export default AboutMe;
