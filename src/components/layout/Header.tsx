import Image from "../common/Image";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full py-4 bg-white">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 lg:px-10">
        <div className="flex items-center space-x-10 lg:space-x-20">
          <Image src="/rumah123.svg" alt="logo" className="w-[205px] h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
