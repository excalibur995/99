import Carousel from "@/components/common/Carousel";
import { SwiperSlide } from "swiper/react";
import IntentionCard from "./IntentionCard";

export interface IntentionListProps {
  intentionList?: { src: string; title: string }[];
}

const IntentionList = (props: IntentionListProps) => {
  const { intentionList = [] } = props;
  return (
    <div className="my-6">
      <Carousel
        data={intentionList}
        onRenderItem={(intention, key) => (
          <SwiperSlide className="!w-auto mx-2" key={key}>
            <IntentionCard src={intention.src} title={intention.title} />
          </SwiperSlide>
        )}
      />
    </div>
  );
};

export default IntentionList;
