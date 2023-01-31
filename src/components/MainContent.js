import Item from "./Item";
import bison from "../assets/img/mbison.jpg";
import nash from "../assets/img/nash.webp";

const MainContent = () => {
  return (
    <div className="maincontent">
      <Item
        name="Mighty bison"
        text="Grand dictateur et chef de Shadaloo"
        img={bison}
        desc="M. Bison, parfois surnommé Mighty Bison, est le principal antagoniste de la série de jeux vidéo de combat Street Fighter, débutant dans Street Fighter II : La guerre mondiale. Il est le chef tyrannique, diabolique, manipulateur et sans cœur de l'organisation Shadaloo, et le méchant le plus autoritaire et le plus puissant de la série. Il apparaît également comme l'antagoniste principal des adaptations télévisées et des films. Il est également l'ennemi le plus détesté de Ryu et Chun-Li et de nombreux autres personnages de la série."
      />

      <Item
        name="charlie nash"
        text="Le meilleur ami de Guile"
        img={nash}
        desc="Le Lieutenant Charlie Nash de l'US Air Force est un compagnon d'arme de Guile. Il enquête sur la corruption au sein de l'armée américaine, certains officiers vendraient des armes à l'organisation criminelle Shadowlaw, dirigée par M. Bison. Epris de justice, il trouvera de l'aide dans sa traque auprès de Chun-Li, elle aussi sur les traces de Bison.

        La fin officielle statuée par Capcom indique que Charlie est mort en permettant à Guile de s'échapper de la base de Bison quand elle explose, à la fin de Street Fighter Alpha 3. Ce qui explique pourquoi Guile est revenu dans Street Fighter 2, pour venger son ami car il a appris que Bison était toujours vivant."
      />
    </div>
  );
};

export default MainContent;
