import Link from "next/link";

import "../../styles/common/Logo.scss";

type LogoPros = {
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const Logo = ({ onClick }: LogoPros) => {
  return (
    <Link href="/" id="logo" onClick={onClick}>
      Dash
    </Link>
  );
};

export default Logo;
