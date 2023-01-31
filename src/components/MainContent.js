import Item from "./Item";
import banner from "../assets/img/sfvchampion.jpg";
import banner2 from "../assets/img/nash.webp";

const MainContent = () => {
  return (
    <div className="maincontent">
      <Item
        name="Street fighter v"
        text="Jeu phare de la licence"
        img={banner}
        desc="Le 16 février 2016 sort Street Fighter V sur Playstation 4 et sur PC. Le jeu ne sortira pas sur la console concurrente de celle-ci, la Xbox One de Microsoft, en raison d'un contrat de développement entre Capcom et Sony, les constructeurs de la PlayStation."
      />

      <Item
        name="nash"
        text="Charlie Nash"
        img={banner2}
        desc="Le Lieutenant Charlie Nash de l'US Air Force est un compagnon d'arme de Guile. Il enquête sur la corruption au sein de l'armée américaine, certains officiers vendraient des armes à l'organisation criminelle Shadowlaw, dirigée par M. Bison. Epris de justice, il trouvera de l'aide dans sa traque auprès de Chun-Li, elle aussi sur les traces de Bison.

        La fin officielle statuée par Capcom indique que Charlie est mort en permettant à Guile de s'échapper de la base de Bison quand elle explose, à la fin de Street Fighter Alpha 3. Ce qui explique pourquoi Guile est revenu dans Street Fighter 2, pour venger son ami car il a appris que Bison était toujours vivant."
      />
    </div>
  );
};

export default MainContent;
