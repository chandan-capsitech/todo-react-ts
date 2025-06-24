import { HiOutlineBookOpen } from "react-icons/hi";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="p-4 shadow-lg flex flex-row items-center justify-center gap-2 m-4 bg-gray-200 rounded-lg">
      <HiOutlineBookOpen className="text-4xl"/>
      <h1 className="text-3xl font-bold text-center my-4 text-yellow-500">{title}</h1>
    </div>
  );
}

export default Header