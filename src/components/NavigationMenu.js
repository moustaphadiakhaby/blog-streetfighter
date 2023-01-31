import Link from "./Link";

const NavigationMenu = () => {
  return (
    <div className="navigation container">
      <nav className="links">
        <Link
          link="https://streetfighter.fandom.com/wiki/Street_Fighter_II:_The_World_Warrior"
          name="Street Fighter II"
        />
        <Link
          link="https://streetfighter.fandom.com/wiki/Street_Fighter_III:_New_Generation"
          name="Street Fighter III"
        />
        <Link
          link="https://streetfighter.fandom.com/wiki/Street_Fighter_IV"
          name="Street Fighter IV"
        />
      </nav>
      <div className="lonelylink">
        <Link
          link="https://streetfighter.fandom.com/wiki/Street_Fighter_V"
          name="Street Fighter V"
        />
      </div>
    </div>
  );
};

export default NavigationMenu;
