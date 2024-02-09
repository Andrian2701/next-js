import MobileMenu from "./MobileMenu";
import LangMenu from "./LangMenu";
import ProfileMenu from "./ProfileMenu";
import NavLinks from "../common/NavLinks";
import Logo from "../common/Logo";

import "../../styles/layouts/Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <MobileMenu />
          <Logo />
        </div>
        <div className="right">
          <NavLinks selector="header-links" />
          <div className="cta">
            <LangMenu />
            <ProfileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
