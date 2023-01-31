import AboutMe from "./AboutMe";
import guile from "../assets/img/guilepose.jpg";
import guilebanner from "../assets/img/guilewallpaper.jpg";

const SideContent = () => {
  return (
    <div className="sidecontent">
      <AboutMe
        name="Guile"
        img={guile}
        img2={guilebanner}
        desc="Pilote de l'US Air Force qui se bat pour son pays, Guile a fait tomber Shadaloo pour venger son ami Nash. Il profite de sa vie de famille, mais de nouveaux combats l'attendent."
      />
    </div>
  );
};

export default SideContent;
