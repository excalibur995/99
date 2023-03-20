import Image from "@/components/common/Image";

const socialMedia = [
  "facebook",
  "twitter",
  "instagram",
  "youtube",
  "linkedin",
  "tiktok",
];

const texts = [
  "Tentang Kami",
  "Karir",
  "Kontak Kami",
  "Kebijakan Privasi",
  "Syarat Penggunaan",
  "Syarat Penggunaan Agen",
];

const country = [
  "Australia",
  "Hong Kong",
  "India",
  "Indonesia",
  "Malaysia",
  "Singapura",
  "Thailand",
  "Amerika Serikat",
];

const partner = [
  "myfun.com",
  "makaan.com",
  "move.com",
  "proptiger.com",
  "prakard.com",
  "realcommercial.com.au",
  "SMARTExpo",
];

export const Footer = () => {
  return (
    <footer className="p-4 bg-[#0D1A35] text-white  text-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
          <div className="flex flex-row gap-6 mb-6  flex-wrap">
            {socialMedia.map((text) => (
              <Image
                key={text}
                src={`/${text}.svg`}
                alt="playstore"
                className="w-6 h-6"
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 mb-6  flex-wrap">
            {texts.map((text) => (
              <p className="font-light" key={text}>
                {text}
              </p>
            ))}
          </div>
        </div>
        <Image
          src="/images/app.png"
          alt="playstore"
          className="w-[226px] h-12"
          nextImageConfig={{ className: "object-contain" }}
        />
        <section className="my-6">
          <p className="font-medium">Situs International:</p>
          <div className="flex flex-row gap-6 my-4  flex-wrap">
            {country.map((text) => (
              <p className="font-light" key={text}>
                {text}
              </p>
            ))}
          </div>
        </section>
        <section className="my-6">
          <p className="font-medium">Situs Partner:</p>
          <div className="flex flex-row gap-6 my-4 flex-wrap">
            {partner.map((text) => (
              <p className="font-light" key={text}>
                {text}
              </p>
            ))}
          </div>
        </section>
        <h3 className="font-light mt-10">
          © 2020 PT. Web Marketing Indonesia. Seluruh hak cipta. Anak Perusahaan
          REA Group Ltd.
        </h3>
      </div>
    </footer>
  );
};
