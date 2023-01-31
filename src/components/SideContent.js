import AboutMe from "./AboutMe";
import guile from "../assets/img/guile.png";

const SideContent = () => {
  return (
    <div className="sidecontent">
      <AboutMe
        name="Guile"
        img={guile}
        desc="Pilote de l'US Air Force qui se bat pour son pays, Guile a fait tomber Shadaloo pour venger son ami Nash. Il profite de sa vie de famille, mais de nouveaux combats l'attendent."
      />
    </div>
  );
};

export default SideContent;
