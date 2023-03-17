import Field from "@/components/common/Field";
import Image from "@/components/common/Image";
import IntentionList from "@/domain/Intention/interface/IntentionList";
import { intentionList } from "@/lib/constant";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4 mt-14">
      <picture className="w-full">
        <Image
          src="/images/Banner.png"
          alt="Banner Image"
          className="hidden lg:flex w-full aspect-video max-h-[420px]"
          nextImageConfig={{ className: "object-fill" }}
        />
        <Image
          src="/images/Banner_mobile.png"
          alt="Banner Image"
          className="lg:hidden w-full aspect-video max-h-[420px]"
          nextImageConfig={{ className: "object-initial" }}
        />
      </picture>
      <div className="container mx-auto lg:mt-10 ">
        <Field
          label="Penuhi Segala Kebutuhan"
          subLabel="Banyak kebutuhan yang bisa dipenuhi hanya dengan menjaminkan properti kamu"
        >
          <section className="h-auto">
            <IntentionList intentionList={intentionList} />
          </section>
          {/* <IntentionCard src="/images/renovation.png" title="Renovasi Rumah" /> */}
        </Field>
        <Field
          label="Pillihan Bank Kredit Multiguna"
          subLabel="Daftar bank dengan bunga KPR menarik. Cek pilihannya hanya di Rumah123!"
        ></Field>
      </div>
    </div>
  );
}
