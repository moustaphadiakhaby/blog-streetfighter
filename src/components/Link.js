const Link = (props) => {
  return (
    <a target="_blank" href={props.link}>
      {props.name}
    </a>
  );
};

export default Link;
