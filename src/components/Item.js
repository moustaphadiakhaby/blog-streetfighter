import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <div className="item">
      <ItemTitle name={props.name} />
      <ItemSubtitle text={props.text} />
      <ItemPicture img={props.img} />
      <ItemDescription desc={props.desc} />
    </div>
  );
};

export default Item;
