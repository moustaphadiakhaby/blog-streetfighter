const Link = (props) => {
  return (
    <a target="_blank" rel="noreferrer" href={props.link}>
      {props.name}
    </a>
  );
};

export default Link;
