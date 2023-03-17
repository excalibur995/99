import { Pagination } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

interface SwiperComponentProps<T> extends SwiperProps {
  data: T[];
  onRenderItem: (item: T, index: number, arr: T[]) => React.ReactNode;
}

function Carousel<T = any>(props: SwiperComponentProps<T>) {
  const { data = [], onRenderItem = () => null, ...rest } = props;
  return (
    <Swiper
      className="!mt-4 max-w-full"
      spaceBetween={16}
      slidesPerView={"auto"}
      modules={[Pagination]}
      {...rest}
    >
      {data?.map(onRenderItem)}
    </Swiper>
  );
}

export default Carousel;
