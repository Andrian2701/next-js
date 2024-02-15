import Link from "next/link";

type Props = {
  path: string;
  title: string;
};

const FormLink = ({ path, title }: Props) => {
  return (
    <Link href={path} className="forgot-password">
      {title}
    </Link>
  );
};

export default FormLink;
