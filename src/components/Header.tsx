type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <h1 className="text-3xl font-bold text-center my-4 text-yellow-400">{title}</h1>
  );
}

export default Header