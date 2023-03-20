import MainLayout from "@/components/layout/MainLayout";
import QueryConfig from "@/drivers/QueryConfig";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryConfig>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryConfig>
  );
}
