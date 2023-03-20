import Field from "@/components/common/Field";
import CreditList from "@/domain/Credits/interfaces/CreditList";
import IntentionList from "@/domain/Intention/interface/IntentionList";
import Banner from "@/domain/Marketing/interface/Banner";
import { intentionList } from "@/lib/constant";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4 mt-14">
      <Banner />
      <div className="container mx-auto lg:mt-10 ">
        <Field
          label="Penuhi Segala Kebutuhan"
          subLabel="Banyak kebutuhan yang bisa dipenuhi hanya dengan menjaminkan properti kamu"
        >
          <section className="h-auto">
            <IntentionList intentionList={intentionList} />
          </section>
        </Field>
        <Field
          label="Pillihan Bank Kredit Multiguna"
          subLabel="Daftar bank dengan bunga KPR menarik. Cek pilihannya hanya di Rumah123!"
        >
          <section className="p-4">
            <CreditList />
          </section>
        </Field>
      </div>
    </div>
  );
}
