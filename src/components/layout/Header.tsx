import clsx from "clsx";
import Image from "../common/Image";

const navigation = [
  "Dijual",
  "Disewa",
  "Properti Baru",
  "KPR",
  "Cari Agen",
  "Featured",
];

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white ">
      <div className="max-w-[1440px] mx-auto flex items-center h-14 justify-between gap-4 px-4 lg:px-10">
        <div className="flex items-center space-x-10 ">
          <Image src="/Rumah123.svg" alt="logo" className="w-[205px] h-6" />
          <nav className="lg:flex flex-row gap-2 xl:gap-4 hidden">
            {navigation.map((navi) => (
              <p
                className={clsx(
                  "text-[#333F48] hover:opacity-60 cursor-pointer font-medium"
                )}
                key={navi}
              >
                {navi}
              </p>
            ))}
          </nav>
        </div>
        <div className="lg:flex hidden flex-row items-center gap-4">
          <button className="border border-[#2951A3] py-2 px-4 text-[#2951A3] rounded-lg font-bold">
            Iklankan Properti
          </button>
          <section className="flex flex-row items-center gap-2">
            <Image src="account.svg" alt="burger-menu" className="w-6 h-6" />
            Account
          </section>
        </div>
        <section className="flex lg:hidden">
          <Image src="burger-menu.svg" alt="burger-menu" className="w-6 h-6" />
        </section>
      </div>
    </header>
  );
};

export default Header;
