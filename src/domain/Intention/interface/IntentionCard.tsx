import Image, { ImageProps } from "@/components/common/Image";

interface IntetionCard extends ImageProps {
  title?: string;
}

const IntentionCard = (props: IntetionCard) => {
  const { title, ...imageProps } = props;
  return (
    <div className="h-[280px] w-[216px] relative rounded-lg overflow-hidden">
      <Image
        alt="default"
        className="w-full h-full"
        nextImageConfig={{ className: "rounded-xl" }}
        {...imageProps}
      />
      <section className="absolute bottom-0 left-0 right-0 backdrop-blur py-4 px-3 bg-gradient-to-r from-white to-[rgba(255,_255,_255,_0.7)] ">
        <h1 className="text-base text-[#2951A3]">{title}</h1>
      </section>
    </div>
  );
};

export default IntentionCard;
