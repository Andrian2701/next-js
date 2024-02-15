type Props = {
  title: string;
};

const SubmitButton = ({ title }: Props) => {
  return (
    <button className="login" type="submit">
      {title}
    </button>
  );
};

export default SubmitButton;
