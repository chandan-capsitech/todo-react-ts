type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className="text-3xl font-bold text-center my-4 text-indigo-800">{title}</h1>
  );
}

export default Header