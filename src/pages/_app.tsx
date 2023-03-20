import MainLayout from "@/components/layout/MainLayout";
import QueryConfig from "@/drivers/QueryConfig";
import ToastifyConfig from "@/drivers/ToastifyConfig";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryConfig>
      <ToastifyConfig>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ToastifyConfig>
    </QueryConfig>
  );
}
