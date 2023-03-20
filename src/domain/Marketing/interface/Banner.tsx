import Image from "../../../components/common/Image";

const Banner = () => {
  return (
    <picture className="w-full">
      <Image
        src="/images/Banner.png"
        alt="Banner Image"
        className="hidden lg:flex w-full aspect-video max-h-[520px]"
        nextImageConfig={{ className: "object-fill" }}
      />
      <Image
        src="/images/Banner_mobile.png"
        alt="Banner Image"
        className="lg:hidden w-full aspect-video max-h-[420px]"
        nextImageConfig={{ className: "object-initial" }}
      />
    </picture>
  );
};

export default Banner;
