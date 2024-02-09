import Link from "next/link";
import { BiSolidError } from "react-icons/bi";
import { RiShoppingBag2Fill } from "react-icons/ri";

import "../../styles/common/NavLinks.scss";

type NavLinksProps = {
  selector: string;
  onClick?: any;
};

const NavLinks = ({ selector, onClick }: NavLinksProps) => {
  return (
    <ul className={selector}>
      <Link href="/not-found" onClick={onClick}>
        <li>
          <BiSolidError />
          Not Found
        </li>
      </Link>
      <Link href="/products" onClick={onClick}>
        <li>
          <RiShoppingBag2Fill />
          Products
        </li>
      </Link>
    </ul>
  );
};

export default NavLinks;
